import { useState, useEffect } from "react";
import { productPromotions as productPromotionList } from "../constants";

const Promotions = ({ section }) => {
  const [productPromotions, setProductPromotions] = useState([]);

  useEffect(() => {
    if (section === "apartments") {
      setProductPromotions(productPromotionList.apartmentPromotions);
    } else {
      setProductPromotions(productPromotionList.golfCarPromotions);
    }
  }, [section]);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      {productPromotions.length ? (
        <span className="flex flex-row gap-3 justify-center items-center font-sen text-lg">
          Promoción disponible!
          <img
            src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/star-struck_1f929.gif"
            alt="Star Struck Emoji"
            className="w-10 h-10"
          />
        </span>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-10 items-start justify-center">
        {productPromotions.length ? (
          productPromotions.map((item, index) => (
            <p key={index} className="font-sen text-lg">
              {item}
            </p>
          ))
        ) : (
          <p className="font-sen text-lg">
            No hay promociones disponibles en el momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default Promotions;
