import React from "react";

const InfoBox = ({ title, value, moreWidth }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md ${
        moreWidth ? "w-[160px]" : "md:w-[150px] w-[135px]"
      } md:h-[130px] h-[120px] shadow-md p-4 bg-white bg-opacity-30`}
    >
      <h4 className="font-epilogue font-bold text-[30px]  px-3 w-full text-center truncate rounded-t-md gradientText">
        {value}
      </h4>
      <p className="font-epilogue font-normal md:text-md text-sm px-3 w-full text-center rounded-b-md font-jakarta capitalize">
        {title}
      </p>
    </div>
  );
};

export default InfoBox;
