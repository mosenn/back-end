const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const server = http.createServer(app);
app.use(cors());

//* config io
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

//* work with io
io.on("connection", (socket) => { 
  //   console.log(`user is connect with ID: ${socket.id}`);

  socket.on("JOIN_ROOM", (data) => {
    socket.join(data);
    console.log(`user with id :${socket.id} join room ${data}`);
  });

  socket.on("SEND_MESSAGE", (data) => {
    // console.log("user info  :", data);
    socket.to(data.roomId).emit("receive_message", data);
  });
});

app.get("/", (req, res) => {
  return res.send("chat app");
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log("server is runing");
});
