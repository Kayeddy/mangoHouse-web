import React from "react";
import InputField from "./utilityComponents/InputField";
import Select from "react-select";
import Calendar from "./utilityComponents/Calendar";
import CustomButton from "./CustomButton";
import { AiOutlineWhatsApp as WhatsappIcon } from "react-icons/ai";

const ReservationForm = ({
  formState,
  handleFieldChange,
  handleDateChange,
  handleReservationAmountChange,
  handleReservation,
}) => {
  // Options for the Select component
  const selectOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  // Custom styles for the Select component
  const selectCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#f49096" : "white",
    }),
    control: (provided) => ({
      ...provided,
      borderColor: "#B5B5B5",
      borderRadius: "0.375rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#B5B5B5",
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 h-fit">
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-24">
        <div className="flex flex-col gap-12">
          <InputField
            id="username-input"
            icon="person"
            placeholder="Nombre"
            type="text"
            value={formState.username}
            onChange={(e) => handleFieldChange("username", e.target.value)}
          />
          <InputField
            id="email-input"
            icon="email"
            placeholder="Email"
            type="email"
            value={formState.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
          <InputField
            id="phone-input"
            icon="phone"
            placeholder="Celular"
            type="tel"
            value={formState.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
          />
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <Select
              options={selectOptions}
              styles={selectCustomStyles}
              isSearchable={false}
              placeholder="Cantidad de personas"
              value={formState.selectedReservationAmount}
              onChange={handleReservationAmountChange}
            />
          </div>
        </div>

        <Calendar
          selectedDate={formState.selectedDate}
          handleDateChange={handleDateChange}
        />
      </div>

      <a onClick={handleReservation} target="_blank" rel="noopener noreferrer">
        <CustomButton
          type="filled"
          title={
            <div className="flex flex-row gap-2 w-fit">
              <WhatsappIcon className="text-[25px] text-white" />
              Reservar por WhatsApp
            </div>
          }
          disabled={!formState.isFormValid} // disable the button if the form is not completely filled
          styles="w-34 px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
        />
      </a>
    </div>
  );
};

export default ReservationForm;
