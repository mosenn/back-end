const express = require("express");
const ws = require("ws");
const cors = require("cors");
const testRouter = require("./routes/test");
const userRouter = require("./routes/user");
const messageRouter = require("./routes/mesage");
const connectionToDb = require("./connection/Db");
let cookieParser = require("cookie-parser");
const { sign, verify } = require("./tools/jwt");

const Messagemodel = require("./model/Message");
const app = express();
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

app.use(cookieParser());
app.use(express.json());

//*connect to data base
connectionToDb();
//*doTEnv

require("dotenv").config({ path: "./config/config.env" });
//*Routers
app.use("/", testRouter);
app.use("/", userRouter);
app.use("/", messageRouter);
//*Listen

const port = process.env.PORT || 3010;
const server = app.listen(port, () => {
  console.log(`server is runing at ${port}`);
  console.log(`db is connect at ${process.env.DATA_BASE_URL}`);
});
const socket = new ws.WebSocketServer({ server });

socket.on("connection", (connection, req) => {
  console.log("connected");
  // connection.send('hellow')
  // console.log("req header from socket.one:", req.headers.cookie);

  //*read username and id from cookie for this connection
  const cookie = req.headers.cookie;
  // console.log("req header from socket.one:", cookie);
  if (cookie) {
    const tokenSTringInfoUser = cookie.replace("token=", "");
    const decodedTokenSocket = verify(tokenSTringInfoUser, "secret");
    const { userId, name } = decodedTokenSocket;
    // console.log(userId, name);
    connection.username = name;
    connection.id = userId;
  }
  // console.log([...socket.clients].map((users) => users.username, users.userId));

  //*here get mesasge inpute from front then check if user message and id , then filter and send json
  connection.on("message", async (message) => {
    const userSendMessage = JSON.parse(message.toString());
    console.log(userSendMessage);
    const { text, recipinet } = userSendMessage.msg;
    if ((text, recipinet)) {
      const MessageDoc = await Messagemodel.create({
        sender: connection.id,
        recipinet: recipinet,
        text: text,
      });
      [...socket.clients]
        .filter((c) => c.id === recipinet)
        .forEach((c) =>
          c.send(
            JSON.stringify({
              text,
              sender: connection.id,
              recipinet,
              _id: MessageDoc._id,
            })
          )
        );
    }
  });

  //* notify everyone about online users (when some one connect)
  const userClinet = [...socket.clients];

  const userInfo = userClinet.map((clinet) => ({
    userId: clinet.id,
    username: clinet.username,
  }));
  console.log(userInfo);

  userClinet.forEach((clinet) => {
    clinet.send(JSON.stringify({ userInfo })) ;
  });
});
