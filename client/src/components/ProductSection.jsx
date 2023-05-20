import React from "react";
import DynamicTab from "./DynamicTab";

const ProductSection = () => {
  return (
    <div className="w-full h-fit mb-10">
      <div
        className={`flex w-full items-center justify-center transition-all duration-500 ease-in-out`}
      >
        <h2
          className={`text-xl font-sen font-semibold mb-2 transition-all duration-500 ease-in-out capitalize flex items-center text-[#1A202C] md:mt-12`}
        >
          Nuestros servicios
        </h2>
      </div>
      <div className="mt-8 w-full h-full">
        <DynamicTab />
      </div>
    </div>
  );
};

export default ProductSection;
