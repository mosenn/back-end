import React from "react";

const colors = [
  "bg-teal-200",
  "bg-red-200",
  "bg-purple-200",
  "bg-blue-200",
  "bg-yellow-100",
];

const Avatar = ({ username, id, onlineUser, offuser }) => {
  // console.log(id);
  const userIdBase16 = parseInt(id, 16);
  const colorIndex = userIdBase16 % colors.length;
  const color = colors[colorIndex];
  // console.log(color);

  return (
    <div
      className={
        "w-16 h-16 relative rounded-full  flex items-center justify-center text-2xl opacity-70 " +
        color
      }
    >
      {username ? username[0] : offuser[0]}
      {onlineUser && (
        <div className="absolute w-3 h-3 bg-green-500 bottom-2 rounded-full right-0"></div>
      )}
      {offuser && (
        <div className="absolute w-3 h-3 bg-gray-500 bottom-2 rounded-full right-0"></div>
      )}
    </div>
  );
};

export default Avatar;
