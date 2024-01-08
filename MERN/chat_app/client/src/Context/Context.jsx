import { useContext, createContext, useState, useEffect } from "react";
import { Profile } from "../api/RegisterUser";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    Profile(setUserId, setUser);
  }, []);
  return (
    <AppContext.Provider
      value={{ user, setUser, userId, setUserId, userToken, setUserToken }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalcontext = () => {
  return useContext(AppContext);
};

