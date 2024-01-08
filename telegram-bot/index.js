require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const Agent = require("socks5-https-client/lib/Agent");
const connectToDataBase = require("./connection/db");
const User = require("./model/user");
const telegramBot = require("node-telegram-bot-api");

const app = express();
app.use(cors());
//* connect to data base
connectToDataBase();

//* bot
// const webhookUrl = "https://telegram-bot-three-alpha.vercel.app/";
const token = "6649772485:AAFxf4ymzoUWoIbEPi9IgQY7b7KjJcQVUBo";
const bot = new telegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
  // request: {
  //   agentClass: Agent,
  //   agentOptions: {
  //     socksHost: "216.185.46.69",
  //     socksPort: "50101",
  //     // secret:
  //     //   "",
  //     socksUsername: "egbalwaldmann",
  //     socksPassword: "W5BiYBqgEL",
  //   },
  // },
});
// bot.setWebHook(webhookUrl);
// //* bot function
console.log("here");
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  const userId = msg.from.id;
  const username = msg.from.username;
  const firstName = msg.from.first_name;
  const lastName = msg.from.last_name;
  const languageCode = msg.from.language_code;

  // const chatId = msg.chat.id;

  console.log(`User Info:
ID: ${userId},
Username: ${username},
First Name: ${firstName},
Last Name: ${lastName},
Language Code: ${languageCode}
`);

  try {
    const existUser = await User.findOne({ ID: userId });
    console.log("existUser", existUser);
    if (!existUser) {
      const user = await User.create({
        ID: userId,
        username,
        firstName,
        lastName,
        languageCode,
        role: "user",
      });
      console.log("user", user);
    }

    if (messageText === "s") {
      bot.sendMessage(chatId, "welcome to the bot");
    }
    if (messageText === "/command1") {
      bot.sendMessage(chatId, "your time is started");
    }
  } catch (err) {
    console.log("bot on err", err);
  }
});

//* bot end

//* user and admin diffrent menu

// Function to handle commands for admin
const handleAdminCommands = async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log("chatId", chatId);
  if (messageText === "/admin_start") {
    return bot.sendMessage(chatId, "Admin is started");
  }
  if (messageText === "/admin_end") {
    return bot.sendMessage(chatId, "Admin stop this");
  }
};

// Function to handle commands for user
const handleUserCommands = async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/user_start") {
    return bot.sendMessage(chatId, "User start this");
  }

  if (messageText === "/user_end") {
    return bot.sendMessage(chatId, "User end this");
  }
};

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  try {
    // Check if the user is an admin (You need to implement this logic based on your requirements)
    const user = await User.findOne({ ID: userId });
    if (user.role === "admin") {
      handleAdminCommands(msg);
    }
    if (user.role === "admin" || user.role === "user") {
      // Handle user commands
      handleUserCommands(msg);
    }


    // Your existing user creation logic goes here...
  } catch (err) {
    console.log(
      "bot on err for handleAdminCommands and handleUserCommands ",
      err,
    );
  }
});

//* routes
// app.use("/", require("./routes/user"));
app.get("/", (req, res) => {
  return res.send("server is runing");
});

//*listen server
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is runing at localhost://${port}`);
});
