import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
const socket = io.connect("http://localhost:4000");
import { Chat } from "./Components/Chat";
function App() {
  const [inputsValues, setInputValues] = useState({
    room: "",
    username: "",
  });

  const [showChat, setShowChat] = useState(false);

  const takeInputValues = (event) => {
    setInputValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  };

  const joinRoom = (event) => {
    event.preventDefault();
    const { room, username } = inputsValues;
    // console.log(username, room);
    if (username && room) {
      // console.log("accpet socket");
      socket.emit("JOIN_ROOM", room);
      setShowChat(true);
    }
  };

  // console.log(inputsValues);
  return (
    <div className="App">
      <h1>hellow</h1>
      {showChat ? (
        <Chat
          socket={socket}
          username={inputsValues.username}
          room={inputsValues.room}
        />
      ) : (
        <form action="" onSubmit={joinRoom}>
          <input
            onChange={takeInputValues}
            type="text"
            placeholder="user"
            name="username"
            value={inputsValues.username}
          />
          <input
            onChange={takeInputValues}
            type="text"
            name="room"
            placeholder="room"
            value={inputsValues.room}
          />
          <button type="submit">Join Room</button>
        </form>
      )}
    </div>
  );
}

export default App;
