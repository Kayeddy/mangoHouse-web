import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingCard = ({ items, smallScreens }) => {
  const [showImageCards, setShowImageCards] = useState(true);

  const randomDuration = (min, max) => Math.random() * (max - min) + min;
  const videoItems = items.filter((item) => item.type === "video");
  const imageItems = items.filter((item) => item.type === "image");

  useEffect(() => {
    handleScreenHeightChange(); // Call the function on the initial render
    window.addEventListener("resize", handleScreenHeightChange);

    return () => {
      window.removeEventListener("resize", handleScreenHeightChange);
    };
  }, []);

  const handleScreenHeightChange = () => {
    if (window.innerHeight < 800) {
      setShowImageCards(false);
      smallScreens(true);
    } else {
      setShowImageCards(true);
      smallScreens(false);
    }
  };
  const cardVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
    },
    animate: (i) => ({
      rotateY: [0, 180, 0],
      transition: {
        duration: randomDuration(10, 20), // Set the desired range of duration (e.g., between 6 to 12 seconds)
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: i * 1.5, // Add a delay between each card's animation start time
      },
    }),
  };

  return (
    <div className="floating-card">
      <div className="video-container">
        {videoItems.map((item, index) => (
          <div
            key={index}
            className="video-card rounded-md"
            style={{
              width: "100%",
              height: "30vh",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="image-cards-grid grid-cols-2 gap-4 grid">
        {showImageCards &&
          imageItems.map((item, index) => (
            <motion.div
              key={index}
              className="card rounded-md"
              style={{
                width: "100%",
                height: "13vh",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
              }}
              variants={cardVariants}
              initial="initial"
              animate={cardVariants.animate(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default FloatingCard;
