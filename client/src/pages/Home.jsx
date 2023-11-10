// Global imports
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Local imports
import state from "../context";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import logo from "../assets/logo.png";
import { CustomButton } from "../components";

// Other useful elements
const items = [
  { type: "image", src: logo, alt: "Image 1" },
  { type: "video", src: "" },
  { type: "image", src: logo, alt: "Image 2" },
  { type: "image", src: logo, alt: "Image 3" },
  { type: "image", src: logo, alt: "Image 4" },
];

const Home = () => {
  //const [adjustFloatingCard, setAdjustFloatingCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    state.userOnHomepage = true;
    return () => {
      state.userOnHomepage = false;
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="flex flex-col md:flex-row  gap-10">
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
                <strong> los mejores </strong> servicios de hospedaje y alquiler
                de vehículos en la isla de San Andrés.
              </p>
              <div className="flex flex-row gap-6 items-center justify-start w-fit">
                <CustomButton
                  type="filled"
                  title="Explorar"
                  handleClick={() => {
                    state.userOnHomepage = false;
                    navigate("/marketplace");
                  }}
                  styles="w-fit px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default Home;
