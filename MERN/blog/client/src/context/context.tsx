import { createContext, useContext, useState } from "react";

interface MyContextValue {
  name: string;
  setUserInforOnline: React.Dispatch<React.SetStateAction<{}>>;
  userInfoOnline: {} | any;
  setuserIntraction: React.Dispatch<React.SetStateAction<[]>>;
  userIntraction: [] | any;
  setUserPosts: React.Dispatch<React.SetStateAction<[]>>;
  userPosts: [] | any;
}

interface AppProviderProps {
  children: React.ReactNode;
}

//* create context
const AppContext = createContext<MyContextValue>({
  name: "",
  setUserInforOnline: () => {},
  userInfoOnline: {},
  setuserIntraction: () => {},
  userIntraction: [],
  setUserPosts: () => {},
  userPosts: [],
});
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  let [userIntraction, setuserIntraction] = useState<[]>([]);
  const [userPosts, setUserPosts] = useState<[]>([]);
  return (
    <AppContext.Provider
      value={{
        name: "mohsen",
        setUserInforOnline,
        userInfoOnline,
        setuserIntraction,
        userIntraction,
        setUserPosts,
        userPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
