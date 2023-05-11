/* eslint-disable react/display-name */
import React from "react";

const InputField = React.forwardRef(
  ({ id, icon, placeholder, handleFocus, type, value, onChange }, ref) => {
    return (
      <div
        className={`relative w-full flex flex-row items-center border-b-1`}
        id={`${id}-container`}
      >
        <span
          className="material-symbols-outlined cursor-pointer text-[#1A202C] "
          id={`${id}-icon`}
        >
          {icon}
        </span>
        <input
          required
          ref={ref}
          id={id}
          type={type}
          onFocus={handleFocus}
          className="w-full px-[20px] font-sen outline-none border-transparent border-[1px] focus:border-transparent focus:ring-0 bg-transparent font-epilogue text-[#1A202C] placeholder:text-[#4b5264] text-[18px] leading-[30px]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default InputField;
