import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./chat.css";

export const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const sendMessage = async () => {
    if (message !== "") {
      const usersMessage = {
        message: message,
        name: username,
        roomId: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("SEND_MESSAGE", usersMessage);
      setList((list) => [...list, usersMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div className="test">
      <textarea
        value={message}
        type="text"
        placeholder="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyUp={(e) => {
          e.code == "Enter" && sendMessage();
        }}
      />
      <button onClick={sendMessage}>send Message</button>
      <ScrollToBottom>
        <section className="body-chat">
          {list &&
            list.map((user) => {
              // console.log(user);
              return (
                <section>
                  <div>
                    <p
                      className={`userMessage ${
                        username === user.name ? "you" : "other"
                      }`}
                    >
                      {user.message}
                    </p>
                  </div>
                  <div className="infoChat">
                    <p>
                      {user.name}
                      <span> at : {user.time}</span>
                    </p>
                  </div>
                </section>
              );
            })}
        </section>
      </ScrollToBottom>
    </div>
  );
};
