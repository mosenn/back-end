import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";

const Header = () => {
  let { userInfoOnline, setUserInforOnline } = useGlobalContext();

  const logOut = async () => {
    await logoutUser();
    //* can set loading for logout take effect
    window.location.reload();
  };

  const takeUser = async () => {
    const user = await profileUser();
    setUserInforOnline(user);
  };
  useEffect(() => {
    takeUser();
  }, []);
  console.log("userInfoOnline", userInfoOnline?.pic);
  return (
    <header className="bg-zinc-200 flex justify-between p-4 text-lg font-bold">
      <div className="flex items-center justify-center">logo</div>
      <nav>
        {userInfoOnline?.username ? (
          <ul className="flex items-center justify-end">
            <li className="mr-4">
              <img
                className="rounded-full w-[50px] h-[50px] border-2 border-blue-950"
                src={userInfoOnline.pic}
                alt={`profile image ${userInfoOnline?.username}`}
              />
            </li>
            <li className="mr-5">
              <Link to="/Panel">Panel</Link>
            </li>
            <li className="mr-4">{userInfoOnline?.username}</li>

            <li className="mr-4">
              <button onClick={logOut}>logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end items-center">
            <li className="mr-4">
              <Link to="/login">login</Link>
            </li>
            <li className="mr-4">
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
