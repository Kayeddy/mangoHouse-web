import React from "react";
import { motion, useAnimation } from "framer-motion";

import { fadeAnimation } from "../config/motion";
import CustomButton from "./CustomButton";
import { Posada1_1 } from "../assets/Apartments";
import { GolfCar1_1, GolfCar1_2 } from "../assets/GolfCar";
import state from "../context";

const DynamicTab = () => {
  const controls1 = useAnimation();

  const handleHoverStart = (controls) => {
    controls.start({
      y: "-4",
      scale: 1,
      color: "#FFF",
    });
  };

  const handleHoverEnd = (controls) => {
    controls.start({
      y: "0",
      scale: 1,
      color: "#FFF",
    });
  };

  const handleHousingProduct = () => {
    state.userViewingService.state = true;
    state.userViewingService.service = "hospedaje";
  };

  const handleTransportProduct = () => {
    state.userViewingService.state = true;
    state.userViewingService.service = "transporte";
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex-1 hidden md:flex flex-row justify-around items-center gap-10 md:gap-2">
        <motion.div
          onHoverStart={() => handleHoverStart(controls1)}
          onHoverEnd={() => handleHoverEnd(controls1)}
          initial={{
            backgroundColor: "rgba(249, 174, 81, 1)",
            backgroundImage: "linear-gradient(115deg, #f49096, #f9ae51)",
          }}
          whileHover={{
            backgroundColor: "rgba(249, 174, 81, 0.9)",
            backgroundImage: "linear-gradient(115deg, #f49096, #f9ae51)",
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col w-[40%] md:py-24 md:hover:py-8 md:px-5 items-center justify-center md:border-b-2 md:border-t-2 border-slate-200 group relative"
        >
          <motion.h2
            animate={controls1}
            className="font-sen text-[30px] md:block hidden text-white "
          >
            Hospedaje
          </motion.h2>

          <motion.section
            className="md:flex hidden flex-row items-center justify-center gap-6 py-2 group-hover:px-6 group opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500"
            {...fadeAnimation}
          >
            <img
              src={Posada1_1}
              alt="posada_cover_image"
              className="w-32 h-32 object-cover rounded-md hidden lg:group-hover:block transition-all duration-500 ease-in-out"
            />
            <div className="flex flex-col gap-4 lg:items-start items-centers justify-center transition-all duration-500 ease-in-out">
              <p className="text-lg text-white font-jakarta lg:text-left text-center hidden md:group-hover:block transition-all duration-500 ease-in-out">
                {" "}
                Encuentra comodidad y tranquilidad durante tu estadía en la
                isla. Conoce los espacios que tenemos disponibles para ti.
              </p>
              <p
                className="text-white font-jakarta font-md text-center lg:group-hover:text-left cursor-pointer hover:underline"
                onClick={handleHousingProduct}
              >
                {" "}
                Conocer más{" "}
              </p>
            </div>
          </motion.section>
        </motion.div>

        <div className="h-[20px] w-[0.5px] bg-slate-500 md:block hidden"></div>

        <motion.div
          onHoverStart={() => handleHoverStart(controls1)}
          onHoverEnd={() => handleHoverEnd(controls1)}
          initial={{
            backgroundColor: "rgba(249, 174, 81, 1)",
            backgroundImage: "linear-gradient(115deg, #f49096, #f9ae51)",
          }}
          whileHover={{
            backgroundColor: "rgba(249, 174, 81, 0.9)",
            backgroundImage: "linear-gradient(115deg, #f49096, #f9ae51)",
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col w-[40%] md:py-24 md:hover:py-8 md:px-5 items-center justify-center md:border-b-2 md:border-t-2 border-slate-200 group relative"
        >
          <motion.h2
            animate={controls1}
            className="font-sen text-[30px] md:block hidden text-white"
          >
            Movilidad y transporte
          </motion.h2>

          <motion.section
            className="md:flex hidden flex-row items-center justify-center gap-6 py-2 group-hover:px-6 group opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500"
            {...fadeAnimation}
          >
            <img
              src={GolfCar1_1}
              alt="posada_cover_image"
              className="w-32 h-32 object-cover rounded-md hidden lg:group-hover:block transition-all ease-in-out duration-75"
            />
            <div className="flex flex-col gap-4 lg:items-start items-centers justify-center transition-all ease-in-out duration-75">
              <p className="text-lg text-white font-jakarta lg:text-left text-center hidden md:group-hover:block">
                {" "}
                muévete por la isla con comodidad y seguridad, a tu velocidad, a
                tu ritmo. Te espera una gran aventura en ruedas!
              </p>
              <p
                className="text-white font-jakarta font-md text-center lg:group-hover:text-left cursor-pointer hover:underline"
                onClick={handleTransportProduct}
              >
                {" "}
                Conocer más{" "}
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>

      <div className="md:hidden w-full flex flex-1 flex-col items-center justify-center gap-8">
        <CustomButton
          type="filled"
          title="Hospedaje"
          handleClick={handleHousingProduct}
          styles="w-full px-12 py-4 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51] md:hidden"
        />
        <CustomButton
          type="filled"
          title="Hospedaje"
          handleClick={handleTransportProduct}
          styles="w-full px-12 py-4 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51] md:hidden"
        />
      </div>
    </div>
  );
};

export default DynamicTab;
