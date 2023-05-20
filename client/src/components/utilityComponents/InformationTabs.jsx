import React, { useState } from "react";

const InformationTabs = ({ tab }) => {
  const [currentTab, setCurrentTab] = useState("Tarifas");

  const handleTabChange = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between py-2">
        {["Tarifas", "Promociones", "Reserva"].map((item, index) => (
          <p
            key={index}
            className={`font-sen text-[17px] md:w-full w-fit leading-[22px] text-center text-[#1A202C] cursor-pointer transition-all ease-in-out duration-200 select-none ${
              currentTab === item
                ? "text-[#f49096] border-b-[1px] border-[#f9ae51] hover:text-[#f49096] hover:opacity-100 font-semibold"
                : "hover:text-[#f49096] hover:opacity-60"
            }`}
            onClick={() => {
              handleTabChange(item);
              tab(item);
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InformationTabs;
