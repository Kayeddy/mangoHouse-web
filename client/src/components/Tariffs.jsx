import { useEffect, useState } from "react";
import { productTarrifs } from "../constants";

const Tariffs = ({ section }) => {
  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    const newTariffs =
      section === "apartments"
        ? productTarrifs.apartmentTariffs
        : productTarrifs.golfCarTariffs;

    setTariffs(newTariffs);
  }, [section]);

  const renderTariffItem = (item, index) => {
    return section === "apartments" ? (
      <p key={item.id} className="font-sen text-lg">
        <b>{item.amountOfPeople} persona(s)</b>:{" "}
        {`$${item.price.toLocaleString()} COP`}
      </p>
    ) : (
      <div
        key={item.id}
        className="flex flex-col items-start justify-start gap-4"
      >
        <p className="font-sen text-xl font-bold">
          {`De ${item.amountOfPeople[0]} a ${item.amountOfPeople[1]} personas:`}
        </p>
        <ol className="list-disc space-y-3">
          <li>{`Tiempo: De ${item.time[0]} AM a ${item.time[1]} PM`}</li>
          <li>{`Precio: $${item.price.toLocaleString()} COP`}</li>
          <li className="font-semibold">{`Precio para las 24 horas de alquiler:  $${item.wholeDayPrice.toLocaleString()} COP`}</li>
        </ol>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="flex flex-col gap-10 items-start justify-center">
        {tariffs.map(renderTariffItem)}
      </div>
    </div>
  );
};

export default Tariffs;
