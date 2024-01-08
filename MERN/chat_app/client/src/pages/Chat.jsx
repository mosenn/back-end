import React, { useEffect, useState, useRef } from "react";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import { useGlobalcontext } from "../Context/Context/";
import { uniqBy } from "lodash";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
export const Chat = () => {
  const [message, setMessage] = useState("");
  const { user, userId, setUserId, setUser } = useGlobalcontext();
  const [ws, setWs] = useState(null);
  const [online, setOnline] = useState([]);
  const [selectedId, setselectedId] = useState();
  const [uiMessage, setUiMessage] = useState([]);
  const [offlineUser, setOfflineUser] = useState([]);
  //*controll dublicate show message on screen
  const [latesMessage, setLatesMessage] = useState(null);

  const setScrollFormessage = useRef();

  const showOnlineUser = (userInfo) => {
    // console.log(userInfo);
    // const userOnline = {};
    const userOnline = userInfo.map(({ userId, username }) => {
      // console.log(userId, username);
      // userOnline[userId] = username;
      // console.log(userId, username);
      return { id: userId, name: username };
    });
    const uniqueUsers = userOnline.filter((user, index, array) => {
      // console.log(array, "array uniqueUser func");
      // console.log(index, "index uniqueUser func");
      // console.log(user, "user uniqueUser func");

      return array.findIndex((u) => u.id === user.id) === index;
    });
    // console.log(uniqueUsers, "uniqueUsers");
    // console.log(userOnline);
    setOnline(uniqueUsers);
  };

  const handleMessage = (e) => {
    // console.log("socket message : ", e.data);
    const data = JSON.parse(e.data);
    // console.log(data, e, "this e and data in handleMessage");
    if ("userInfo" in data) {
      showOnlineUser(data.userInfo);
    } else if ("text" in data) {
      //*my way
      setLatesMessage({ ...data });
      // console.log({ data }, "data in handelmesage");
      //*video way
      // setUiMessage((prev) => [...prev, { isOur: false, text: data.text }]);
    }
  };
  // console.log(online);

  useEffect(() => {
    //*controll dublicate show message on screen
    if (latesMessage) {
      setUiMessage((prev) => [...prev, latesMessage]);
    }
  }, [latesMessage]);

  const connectToWebSocket = () => {
    const socket = new WebSocket("ws://localhost:4010");
    setWs(socket);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", () => console.log("close"));
    socket.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected , try to reconnect");
        connectToWebSocket();
      }, 1000);
    });
  };
  useEffect(() => {
    connectToWebSocket();
  }, []);
  //? if get proplem about user online then out commend this code and maping onlinePepoleExcolOurUser for online user

  //*برای اینه که وقتی داخل یک مروگر با یک یوسر دیگه انلاین شدی فقط همون رو ببینی
  //*مثلا با کروم میای فقط همون یوسر که با کروم امده دیده شه
  //*با یه  مروگر دیگه مثلا ماکروسافت میای فقط همون یوسر دیده شه
  const onlinePepoleExcolOurUser = online.filter(
    (person) => person.name !== user
  );
  // console.log(onlinePepoleExcolOurUser , 'PeoplExcoloOurUser');

  //send message

  const sendMessage = (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({
        msg: {
          recipinet: selectedId,
          text: message,
        },
      })
    );
    setMessage("");
    // //*controll dublicate show message on screen uniqBy
    console.log("message sent");
    setUiMessage(
      (prev) =>
        uniqBy([
          ...prev,
          {
            text: message,
            sender: userId,
            recipinet: selectedId,
            _id: Date.now(),
          },
        ]),
      "text"
    );
    const section = setScrollFormessage.current;
    console.log(section, " section");
    section.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const getChat = async () => {
    if (selectedId) {
      const data = await axios.get(
        "http://localhost:4010/message/" + selectedId
      );
      console.log(data, "chat with id user");
      setUiMessage(data.data);
    }
  };

  useEffect(() => {
    getChat();
  }, [selectedId]);
  // //*controll dublicate show message on screen
  const ControllMessages = uniqBy(uiMessage, "_id");

  //*check online pepole

  const getPepole = async () => {
    const data = await axios.get("http://localhost:4010/pepole/");

    console.log(data.data, "pepoles");
    const offlineUser = data?.data?.filter((p) => p._id !== userId);

    setOfflineUser(offlineUser);

    // console.log(offlineUser, "test");
  };
  useEffect(() => {
    getPepole();
  }, [online]);
  // *last
  const logoutUser = async () => {
    await axios.post("http://localhost:4010/logout");
    setUserId(null);
    setUser(null);
  };
  return (
    <section className="flex h-screen">
      <div className="bg-white w-1/2 md:w-1/3 p-4 ">
        <Logo />

        <div className="text-blue-300 p-4 font-bold text-2xl">Users online</div>
        {online.length > 0 &&
          onlinePepoleExcolOurUser.map((users) => {
            {
              // console.log(users);
            }
            return (
              <div
                key={users.id}
                className={
                  "flex items-center gap-2 border-b border-gray-100 cursor-pointer " +
                  (users.id === selectedId ? "bg-blue-50" : "")
                }
                onClick={() => {
                  setselectedId(users.id);
                }}
              >
                {users.id === selectedId && (
                  <div className="w-1 bg-blue-500 h-20 rounded-r-md pl-2"></div>
                )}
                <div className="flex items-center gap-2 p-2">
                  <Avatar
                    username={users.name}
                    id={users.id}
                    onlineUser={true}
                  />
                  <p className="text-xl font-bold m-2">{users.name}</p>
                </div>
              </div>
            );
          })}
        {/* with object map */}
        {/* {Object.keys(online).map((id) => {
          return (
            <div>
              <p>
                {online[id]} <span>{id}</span>
              </p>
            </div>
          );
        })} */}

        {offlineUser?.map((users) => {
          // console.log(users.username, "users");
          return (
            <div
              key={users._id}
              className={
                "flex items-center gap-2 border-b border-gray-100 cursor-pointer " +
                (users._id === selectedId ? "bg-blue-50" : "")
              }
              onClick={() => {
                setselectedId(users.id);
              }}
            >
              {users._id === selectedId && (
                <div className="w-1 bg-blue-500 h-20 rounded-r-md pl-2"></div>
              )}
              <div className="flex items-center gap-2 p-2">
                <Avatar
                  username={users.name}
                  offuser={users.username}
                  id={users._id}
                  onlineUser={true}
                />
                <p className="text-xl font-bold m-2">{users.username}</p>
              </div>
            </div>
          );
        })}

        <button onClick={logoutUser}> hi {user} if u want Logout click</button>
      </div>
      <ScrollToBottom className="border border-red-500  w-full md:w-2/3 flex  bg-blue-50 flex-col  justify-between">
        <section>
          <div className="flex flex-col   mb-2">
            {selectedId ? (
              ControllMessages.map((msg) => {
                // console.log(msg, "chat message");
                return (
                  <div
                    key={msg._id}
                    className={
                      "flex flex-col " +
                      (msg.sender === userId ? "items-end" : "items-start")
                    }
                  >
                    <div
                      className={
                        "p-2 m-2 rounded-md " +
                        (msg.sender === userId
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-500")
                      }
                    >
                      {/* sender:{msg.sender} */}
                      <br />
                      {/* my id : {userId} */}
                      <p>{msg.text}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h1 className="text-gray-400 text-4xl">
                  {" "}
                  {`<-`} Selecte User For Chat
                </h1>
              </div>
            )}
          </div>

          {selectedId && (
            <form onSubmit={sendMessage}>
              <div className="border border-orange-900 flex m-2 gap-2 ">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2   border rounded-sm"
                  type="text"
                  placeholder="send message"
                />
                <button
                  type="submit"
                  className="w-11  p-2 bg-blue-500 rounded-sm text-white"
                >
                  <svg
                    id="Group_10235"
                    data-name="Group 10235"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 173.64 149.826"
                    fill="#fafafa"
                  >
                    <path
                      id="Path_8370"
                      data-name="Path 8370"
                      d="M163.3,94.537,23.2,36.4A16.767,16.767,0,0,0,.529,56.035L13,104.936H74.053a5.087,5.087,0,0,1,0,10.175H13l-12.47,48.9A16.768,16.768,0,0,0,23.2,183.643l140.1-58.132a16.767,16.767,0,0,0,0-30.974Z"
                      transform="translate(-0.001 -35.111)"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </section>
      </ScrollToBottom>
    </section>
  );
};
