import React from "react";

const CustomButton = ({ type, title, handleClick, styles }) => {
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        color: "#fff",
        border: "none",
      };
    }
  };

  return (
    <button
      className={`${styles} px-2 py-1.5 flex-1 rounded-md font-sen`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
