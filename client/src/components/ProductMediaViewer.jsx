import { useState } from "react";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import LazyLoad from "react-lazyload";

import { MdOutlineKeyboardArrowRight as RightArrow } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft as LeftArrow } from "react-icons/md";

import InfoBox from "./InfoBox";
import { setFullscreenImage } from "../utils";
import state from "../context";

const ProductMediaViewer = ({ media }) => {
  const [activeImage, setActiveImage] = useState(0);
  const snap = useSnapshot(state);

  const handleLeftClick = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage > 0 ? prevActiveImage - 1 : media.length - 1
    );
  };

  const handleRightClick = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage < media.length - 1 ? prevActiveImage + 1 : 0
    );
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col md:flex-row gap-[30px]">
        <div className="relative w-full">
          <div className="carousel w-full relative">
            <div
              className=" absolute  md:top-[40%] top-[40%] z-[999] bottom-0 md:left-[20px] left-2 p-2 md:text-[30px] text-[25px] bg-[#01070E] text-white opacity-50 rounded-lg h-fit cursor-pointer select-none"
              onClick={handleLeftClick}
            >
              <LeftArrow />
            </div>
            <div
              className="absolute md:top-[40%] top-[43%] z-[999] bottom-0 md:right-[20px] right-2 p-2 md:text-[30px] text-[25px] bg-[#01070E] text-white opacity-50 rounded-lg h-fit cursor-pointer select-none"
              onClick={handleRightClick}
            >
              <RightArrow />
            </div>
            <LazyLoad
              height={snap.userViewingService.state ? 200 : 400}
              once
              className="h-fit w-fit"
            >
              <motion.img
                title="Click para ver imagen en pantalla completa"
                src={media[activeImage]}
                alt="Product-images"
                className="w-screen md:h-[550px] h-[350px] object-cover carousel-item transition-opacity duration-500 ease-in-out"
                key={media[activeImage]}
                transition={{ duration: 2 }}
                onClick={setFullscreenImage}
              />
            </LazyLoad>
          </div>

          <div className=" hidden md:flex flex-row items-center justify-start gap-4 w-full p-4 h-[100px] absolute bottom-0 left-0 right-0 bg-[#01070E80] opacity-100 backdrop-blur-[3px]">
            <div className="flex flex-row gap-2 w-full carousel">
              {media.map((item, index) => (
                <LazyLoad once className="h-fit w-fit" key={index}>
                  <img
                    src={item}
                    alt="property_images"
                    className={`h-[60px] w-[60px] object-cover ${
                      index === activeImage ? "h-[70px] w-[70px]" : ""
                    }`}
                  />
                </LazyLoad>
              ))}
            </div>
          </div>
        </div>
        {snap.userViewingService.service !== "transport" && (
          <div className="md:flex grid grid-cols-2 md:w-[150px] w-full flex-wrap justify-center items-center md:justify-between gap-[10px] place-items-center">
            <InfoBox title="Habitaciones" value={"3"} />
            <InfoBox title="baños" value={"2"} />
            <InfoBox title="Salas" value={"2"} />
            <InfoBox title="Patios" value={"1"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductMediaViewer;
