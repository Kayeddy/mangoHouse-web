import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";

import DynamicTab from "./DynamicTab";
import { ApartmentSection, GolfCarSection } from "../components/products";
import state from "../context";

const ProductSection = () => {
  const snap = useSnapshot(state);
  return (
    <div className="w-full h-fit mb-10">
      <div
        className={`flex w-full items-center justify-center transition-all duration-500 ease-in-out`}
      >
        <h2
          className={`text-xl font-sen font-semibold mb-2 transition-all duration-500 ease-in-out capitalize flex items-center text-[#1A202C] ${
            snap.userViewingService.state &&
            "transform md:translate-x-[calc(-100vw+60vw)] translate-x-[calc(0vw-15px)]"
          }`}
        >
          {" "}
          <span
            className={`"font-sen mr-1 ${
              state.userViewingService.state &&
              "cursor-pointer hover:underline "
            }"`}
            onClick={() => (state.userViewingService.state = false)}
          >
            {" "}
            Nuestros servicios{" "}
          </span>{" "}
          {snap.userViewingService.state && " >"}{" "}
          {snap.userViewingService.state && snap.userViewingService.service}
        </h2>
      </div>
      <div className="mt-8 w-full h-full">
        {!snap.userViewingService.state && <DynamicTab />}
        {snap.userViewingService.state &&
          (snap.userViewingService.service === "hospedaje" ? (
            <ApartmentSection />
          ) : (
            <GolfCarSection />
          ))}
      </div>
    </div>
  );
};

export default ProductSection;
