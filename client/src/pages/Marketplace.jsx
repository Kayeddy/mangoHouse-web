// Global imports
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local imports
import state from "../context";
import { fadeAnimation } from "../config/motion";
import { ProductSection } from "../components";
import { DynamicHeader } from "../components/utilityComponents";

const Marketplace = () => {
  useEffect(() => {
    state.userOnHomepage = false;
    state.userViewingService.state = false;
  }, []);

  return (
    <AnimatePresence>
      <div className="w-screen h-screen pb-10 flex flex-col gap-10 overflow-y-auto overflow-x-hidden modal-scrollable-content">
        <DynamicHeader />

        <motion.section
          {...fadeAnimation}
          className={`relative flex-1 w-screen h-auto pt-8 px-4 ${
            state.userViewingService.state ? "pt-2" : "md:pt-24"
          }`}
        >
          <ProductSection />
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default Marketplace;
