import React from "react";

const HeaderInfoCard = ({ title, bodyText, customStyles }) => {
  return (
    <div
      className={`bg-white shadow-lg p-4 w-64 h-32 info-card relative ${customStyles}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f49096] to-[#f9ae51]" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{bodyText}</p>
    </div>
  );
};

export default HeaderInfoCard;
