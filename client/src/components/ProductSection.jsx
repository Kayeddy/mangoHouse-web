import React, { useState, useEffect } from "react";
import DynamicTab from "./DynamicTab";

const ProductSection = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex w-full items-center justify-center">
        <h2 className="text-xl font-semibold mb-2"> Nuestros servicios </h2>
      </div>
      <div className="mt-8 w-full h-full">
        <DynamicTab />
      </div>
    </div>
  );
};

export default ProductSection;
