interface propsToast {
  text: string;
  toast: Boolean;
}
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./toast.css";
const Toast = ({ text, toast }: propsToast) => {
  const { userInfoOnline } = useGlobalContext();
  return (
    <div
      className={` bg-green-300 w-[250px] fixed text-center  p-[10px] rounded font-semibold text-[#6f6f6f]  ${
        toast && "showToast"
      } `}
    >
      <p>
        <span>🎉</span> {text}
      </p>
      <div
        className={`absolute bg-blue-300 w- h-[3px] bottom-[-3px] left-0 rounded-sm ${
          toast && "loadingLineBottom"
        }`}
      ></div>
      {!userInfoOnline?.username && (
        <div>
          <Link className="m-2" to="/register">
            register
          </Link>
          <Link className="m-2" to="/login">
            login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Toast;
