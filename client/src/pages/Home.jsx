// Global imports
import React, { useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { useSnapshot } from "valtio";

// Local imports
import state from "../context";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import logo from "../assets/logo.png";

import { CustomButton, FloatingCard } from "../components";

const Home = () => {
  const [adjustFloatingCard, setAdjustFloatingCard] = useState(false);
  const items = [
    { type: "image", src: logo, alt: "Image 1" },
    { type: "video", src: "" },
    { type: "image", src: logo, alt: "Image 2" },
    { type: "image", src: logo, alt: "Image 3" },
    { type: "image", src: logo, alt: "Image 4" },
  ];

  const reAdjustFloatingCards = (param) => {
    setAdjustFloatingCard(param);
  };

  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.userOnHomepage && (
        <div className="flex flex-col md:flex-row overflow-y-auto gap-10">
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text gradientText">
                  <motion.span className="block">Mango House</motion.span>
                </h1>
              </motion.div>

              <motion.div
                className="flex flex-col gap-5"
                {...headContentAnimation}
              >
                <p className="max-w-xl font-normal font-jakarta text-gray-600 text-[1.2rem]">
                  Pasea, conoce y disfruta de la isla{" "}
                  <strong>a tu propio ritmo</strong>. Brindamos{" "}
                  <strong> los mejores </strong> servicios de hospedaje y
                  alquiler de vehículos en la isla de San Andrés.
                </p>
                <div className="flex flex-row gap-6 items-center justify-start w-fit">
                  <CustomButton
                    type="filled"
                    title="Explorar"
                    handleClick={() => (state.userOnHomepage = false)}
                    styles="w-fit px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.div
            {...slideAnimation("up")}
            className={`hidden md:block absolute bottom-5 lg:bottom-0 right-5 xl:right-[10%] md:w-[30vw] lg:w-[35vw] ${
              !adjustFloatingCard ? "xl:top-[38.5vh]" : "xl:top-[350px]"
            }`}
          >
            <FloatingCard items={items} smallScreens={reAdjustFloatingCards} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Home;
