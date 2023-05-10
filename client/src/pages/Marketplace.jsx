import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../context";
import { fadeAnimation } from "../config/motion";
import { CustomButton, ProductSection } from "../components";
import { HeaderInfoCard } from "../components/utilityComponents";
import sai4 from "../assets/sai4.jpg";

const Marketplace = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.userOnHomepage && (
        <div className="w-screen h-screen pb-10 flex flex-col gap-10 overflow-y-auto overflow-x-hidden modal-scrollable-content">
          <motion.section
            {...fadeAnimation}
            className="relative w-screen h-auto"
          >
            <div className="relative w-full top-0 z-10">
              <div
                className={`relative w-full h-[400px]  ${
                  snap.userViewingService.state && "md:h-[200px]"
                }`}
              >
                <img
                  src={sai4}
                  alt="island-portrait-background"
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black backdrop-blur-md bg-opacity-40 ${
                    snap.userViewingService.state
                      ? "transition-all duration-300 ease-in-out md:h-[200px]"
                      : "h-[400px]"
                  }`}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center md:px-8 px-2">
                    <p className="font-jakarta text-lg text-white font-normal">
                      {" "}
                      En Mango House{" "}
                    </p>
                    <h2 className="font-sen font-black text-[30px] xl:text-[40px] md:w-[50%] lg:w-[60%] text-center gradientText">
                      Tenemos disponibles para ti los mejores vehículos y
                      apartamentos
                    </h2>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center relative mt-[60px]">
                  <AnimatePresence>
                    {!snap.userViewingService.state && (
                      <motion.div
                        className="absolute bottom-0 mx-auto transform space-x-4 hidden md:flex items-center transition-opacity ease-in-out duration-150"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        key="headerInfoCard"
                      >
                        <HeaderInfoCard
                          title="Card Title"
                          bodyText="Card description"
                        />
                        <HeaderInfoCard
                          title="Card Title"
                          bodyText="Card description"
                        />
                        <HeaderInfoCard
                          title="Card Title"
                          bodyText="Card description"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute z-20 top-5 right-5"
              {...fadeAnimation}
            >
              <CustomButton
                type="filled"
                title="Volver"
                handleClick={() => (state.userOnHomepage = true)}
                styles="w-fit px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
              />
            </motion.div>
          </motion.section>

          <motion.section
            {...fadeAnimation}
            className={`relative flex-1 w-screen h-auto pt-8 px-4 ${
              snap.userViewingService.state ? "pt-2" : "md:pt-24"
            }`}
          >
            <ProductSection />
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Marketplace;
