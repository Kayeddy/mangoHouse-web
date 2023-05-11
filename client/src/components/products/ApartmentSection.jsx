/* eslint-disable react/display-name */
import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { useSnapshot } from "valtio";

import state from "../../context";
import ProductMediaViewer from "../ProductMediaViewer";
import { productsMedia } from "../../constants";
import { Calendar } from "../utilityComponents";
import CustomButton from "../CustomButton";
import InputField from "../utilityComponents/InputField";
import { whatssapConnection } from "../../utils";

const ApartmentSection = () => {
  const [selectedReservationAmount, setSelectedReservationAmount] =
    useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const reservationAmountRef = useRef(null);
  const formattedDate = useRef(
    new Date().toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  const snap = useSnapshot(state);

  const selectOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    if (date) {
      formattedDate.current = date.toLocaleDateString("es-CO", options);
      setSelectedDate(date);
    } else {
      setSelectedDate(new Date());
      formattedDate.current = new Date().toLocaleDateString("es-CO", options);
    }
  };

  const handleReservationAmountChange = (event) => {
    setSelectedReservationAmount(event);
  };

  const highlightField = (e) => {
    const inputRefs = [usernameInputRef, emailInputRef, phoneInputRef];

    inputRefs.forEach((ref) => {
      const container = ref.current.parentElement;
      const icon = container.querySelector("span");

      if (ref.current === e.target) {
        icon.style.color = "#f9ae51";
        container.style.borderBottom = "2px solid #f49096";
      } else {
        icon.style.color = "#1A202C";
        container.style.borderBottom = "1px solid #1A202C";
      }
    });
  };

  const handleReservation = (e) => {
    e.preventDefault();

    // If the button is disabled, do nothing
    if (isButtonDisabled) {
      return;
    }

    const url = whatssapConnection(
      snap.userViewingService.service,
      usernameInputRef.current.value,
      emailInputRef.current.value,
      phoneInputRef.current.value,
      selectedReservationAmount?.value,
      formattedDate.current
    );

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const selectCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isFocused ? "#f49096" : "white",
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

  useEffect(() => {
    if (
      username !== "" &&
      email !== "" &&
      phone !== "" &&
      selectedReservationAmount?.value !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, email, phone, selectedReservationAmount?.value]);

  return (
    <div className="w-full">
      <div className="w-full flex-col items-center justify-start">
        <div className="w-full lg:px-32 px-2">
          <ProductMediaViewer media={productsMedia.apartments} />
        </div>

        <div className="w-full flex lg:px-32 px-2 mt-10 ">
          <div className="flex flex-col items-center justify-center md:p-10 p-3 shadow-md rounded-md w-full gap-12 h-fit">
            <div className="w-full flex flex-row flex-wrap items-center justify-around">
              <div className="flex flex-col gap-8">
                <h2 className="font-sen text-xl text-[#1A202C]">
                  {" "}
                  Reserva con nosotros{" "}
                </h2>
                <InputField
                  ref={usernameInputRef}
                  id="Username-input"
                  icon="person"
                  placeholder="Nombre"
                  handleFocus={highlightField}
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <InputField
                  ref={emailInputRef}
                  id="Email-input"
                  icon="email"
                  placeholder="Email"
                  handleFocus={highlightField}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <InputField
                  ref={phoneInputRef}
                  id="Phone-input"
                  icon="smartphone"
                  placeholder="Celular"
                  handleFocus={highlightField}
                  type="number"
                  value={phone}
                  onChange={handlePhoneChange}
                />

                <div className="flex flex-row gap-4">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <span className="material-symbols-outlined cursor-pointer text-[#1A202C]">
                      {" "}
                      groups{" "}
                    </span>
                    <p className="text-[18px] font-jakarta text-[#1A202C]">
                      Cantidad de personas
                    </p>
                  </div>
                  <Select
                    options={selectOptions}
                    styles={selectCustomStyles}
                    isSearchable={false}
                    placeholder="Seleccionar"
                    className="z-10"
                    ref={reservationAmountRef}
                    value={selectedReservationAmount}
                    onChange={handleReservationAmountChange}
                  >
                    {selectedReservationAmount && (
                      <p>Selected Value: {selectedReservationAmount.label}</p>
                    )}
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-4 h-full items-center md:pt-8 mt-16 md:mt-0 w-fit">
                <p className="font-jakarta md:text-sm text-md text-[#1A202C] ">
                  Selecciona una fecha
                </p>
                <Calendar
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
              </div>
            </div>
            <a
              onClick={handleReservation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                type="filled"
                title="Reservar"
                disabled={isButtonDisabled} // disable the button if the form is not completely filled
                styles="w-32 px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentSection;
