import React from "react";

// You would style these components based on your CSS framework or custom styles.
const TabButton = ({ isActive, onClick, children }) => (
  <button
    className={`font-sen text-[17px] md:w-full w-fit leading-[22px] text-center text-[#1A202C] cursor-pointer transition-all ease-in-out duration-200 select-none ${
      isActive
        ? "text-[#f49096] border-b-[1px] border-[#f9ae51] hover:text-[#f49096] hover:opacity-100 font-semibold"
        : "hover:text-[#f49096] hover:opacity-60"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const InformationTabs = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Tarifas", "Promociones", "Reserva"];

  return (
    <div className="flex flex-row justify-between py-2">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          isActive={currentTab === tab}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </div>
  );
};

export default InformationTabs;
