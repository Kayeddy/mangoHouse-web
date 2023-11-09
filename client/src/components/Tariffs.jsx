import { useEffect, useState } from "react";
import { productTarrifs } from "../constants";

const Tariffs = ({ section }) => {
  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    (() => {
      if (section === "apartments") {
        setTariffs(productTarrifs.apartmentTariffs);
      } else setTariffs(productTarrifs.golfCarTariffs);
    })();
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="flex flex-col gap-10 items-start justify-center">
        {section === "apartments"
          ? tariffs.map((item, index) => (
              <p key={index} className="font-sen text-lg">
                <b>{item.amountOfPeople} persona(s)</b>:{" "}
                {`$${item.price.toLocaleString()} COP`}
              </p>
            ))
          : tariffs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-4"
              >
                <p className="font-sen text-xl font-bold">
                  {" "}
                  {`De ${item.amountOfPeople[0]} a ${item.amountOfPeople[1]} personas:`}
                </p>
                <ol className="list-disc space-y-3">
                  <li>{`Tiempo: De ${item.time[0]} AM a ${item.time[1]} PM`}</li>
                  <li>{`Precio: $${item.price.toLocaleString()} COP`}</li>
                  <li className="font-semibold">{`Precio para las 24 horas de alquiler:  $${item.wholeDayPrice.toLocaleString()} COP`}</li>
                </ol>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Tariffs;
