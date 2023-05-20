import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

import state from "../../context";
import { fadeAnimation } from "../../config/motion";
import { CustomButton } from "../../components";
import HeaderInfoCard from "./HeaderInfoCard";
import sai1 from "../../assets/sai1.jpg";
import sai2 from "../../assets/sai2.jpg";
import sai3 from "../../assets/sai3.webp";
import sai4 from "../../assets/sai4.jpg";
import sai5 from "../../assets/sai5.jpg";

const DynamicHeader = () => {
  const snap = useSnapshot(state);
  const images = [sai1, sai2, sai3, sai4, sai5];
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.section {...fadeAnimation} className="relative w-screen h-auto">
      <div className="relative w-full top-0 z-10">
        <motion.div
          className={`relative w-full`}
          initial={{ height: "200px" }}
          animate={{ height: !snap.userViewingService.state && "400px" }}
          transition={{ duration: 0.5 }} // adjust duration as needed
        >
          <LazyLoad
            height={snap.userViewingService.state ? 200 : 400}
            once
            className={` ${
              snap.userViewingService.state ? "h-[200px]" : "h-[400px]"
            }`}
          >
            <motion.img
              key={currentImage} // change key to force re-render
              src={images[currentImage]}
              alt="San_Andres-portrait-background"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }} // start from the right
              animate={{ opacity: 1, x: 0 }} // animate to the left
              exit={{ opacity: 0, x: -100 }} // exit to the left
              transition={{ duration: 1 }} // adjust animation duration as needed
            />
          </LazyLoad>

          <div
            className={`absolute inset-0 bg-black backdrop-blur-[3px] bg-opacity-30 ${
              snap.userViewingService.state
                ? "transition-all duration-300 ease-in-out md:h-[200px]"
                : "h-[400px]"
            }`}
          >
            <div
              className={`w-full h-full flex flex-col items-center justify-center md:px-8 px-2 ${
                state.userViewingService.state
                  ? "translate-y-5 md:translate-y-0"
                  : "translate-y-0"
              }`}
            >
              <p className="font-jakarta text-lg text-white font-normal">
                {" "}
                En Mango House{" "}
              </p>
              <h2 className="font-sen font-black text-[22px] xl:text-[40px] md:w-[50%] lg:w-[60%] text-center gradientText">
                Tenemos disponibles para ti los mejores vehículos y apartamentos
              </h2>
            </div>
          </div>
          {!snap.userViewingService.state && (
            <div className="w-full flex items-center justify-center relative mt-[80px]">
              <AnimatePresence>
                <motion.div
                  className="absolute bottom-0 mx-auto transform space-x-4 hidden md:flex items-center transition-opacity ease-in-out duration-150"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  key="headerInfoCard"
                >
                  <HeaderInfoCard
                    title="Ambiente campestre"
                    bodyText="Disfruta de una atmósfera familiar y de descanso"
                  />
                  <HeaderInfoCard
                    title="Conveniencia"
                    bodyText="Ubicación A 10 minutos de playas exóticas y atracciones turísticas"
                  />
                  <HeaderInfoCard
                    title="A tu ritmo"
                    bodyText="Experiencia personalizada con tu familia o amigos recorriendo la isla"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
      <motion.div className="absolute z-20 top-5 right-5" {...fadeAnimation}>
        <CustomButton
          type="filled"
          title="Volver"
          handleClick={() => {
            state.userViewingService.state ? navigate(-1) : navigate("/");
          }}
          styles="w-fit px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
        />
      </motion.div>
    </motion.section>
  );
};

export default DynamicHeader;
