// Assets Imports: showcase images for each product (Apartments, Golf cars)
import {
  Posada1_1,
  Posada1_2,
  Posada1_3,
  Posada1_4,
  Posada1_5,
  Posada1_6,
} from "../assets/Apartments";
import {
  GolfCar1_1,
  GolfCar1_2,
  GolfCar1_3,
  GolfCar1_4,
} from "../assets/GolfCar";

// product images export
export const productsMedia = {
  apartments: [
    Posada1_1,
    Posada1_2,
    Posada1_3,
    Posada1_4,
    Posada1_5,
    Posada1_6,
  ],
  golfCar: [GolfCar1_1, GolfCar1_2, GolfCar1_3, GolfCar1_4],
};

// product promotions export
export const productPromotions = {
  golfCarPromotions: [
    "Alquila por más de 48 horas consecutivas y recibe un 15% de descuento!",
  ],
  apartmentPromotions: [],
};

export const productTarrifs = {
  apartmentTariffs: [
    { amountOfPeople: 1, price: 98000 },
    { amountOfPeople: 2, price: 192000 },
    { amountOfPeople: 3, price: 282000 },
    { amountOfPeople: 4, price: 376000 },
  ],
  golfCarTariffs: [
    {
      amountOfPeople: [1, 2],
      time: [9, 6],
      price: 220000,
      wholeDayPrice: 250000,
    },
    {
      amountOfPeople: [3, 4],
      time: [9, 6],
      price: 250000,
      wholeDayPrice: 280000,
    },
    {
      amountOfPeople: [5, 6],
      time: [9, 6],
      price: 280000,
      wholeDayPrice: 300000,
    },
  ],
};
