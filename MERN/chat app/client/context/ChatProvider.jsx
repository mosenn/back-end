import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import { useNavigate } from "react-router-dom";
const chatContext = createContext();

const ChatProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [userProvider, setUser] = useState({});
  const [selectChat, setSelectChat] = useState();
  const [userChat, setUserChat] = useState([]);
  const usersinlocal = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    setUser(usersinlocal);
    console.log(userProvider);
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // setUser(userInfo);
    if (!userProvider) {
      //navigate to login
      // navigate("/login");
    }
    // navigate
  }, []);
  // console.log(userProvider, "user Provider");

  return (
    <chatContext.Provider
      value={{
        userProvider,
        setUser,
        setSelectChat,
        selectChat,
        userChat,
        setUserChat
       
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export { ChatProvider };
export const useChatState = () => {
  return useContext(chatContext);
};
