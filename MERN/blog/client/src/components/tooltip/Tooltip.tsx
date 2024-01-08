import { useState } from "react";
import "./tooltip.css";
import { Link } from "react-router-dom";
interface propsText {
  text: string;
}
const Tooltip = ({ text }: propsText) => {
  const [tooltip, Settooltip] = useState<boolean>(false);
  const closeToolTip = () => {
    Settooltip(!tooltip);
  };
  return (
    <div
      className={` bg-slate-100 m-3  ${
        tooltip ? "showToolTip" : "hideToolTip"
      }  w-[fit-content]  `}
    >
      <section>
        <div className="flex m-2  w-[100%]">
          <p> {text}</p>
          <button
            className="border border-sky-400  ml-3"
            onClick={closeToolTip}
          >
            X
          </button>
        </div>
        <div className="flex justify-center">
          <Link className="m-1" to="/login">
            login
          </Link>
          <Link className="m-1" to="/register">
            {" "}
            register
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tooltip;
