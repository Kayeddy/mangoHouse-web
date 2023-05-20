import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { useSnapshot } from "valtio";
import { AiOutlineWhatsApp as WhatssapIcon } from "react-icons/ai";

import state from "../context";
import ProductMediaViewer from "../components/ProductMediaViewer";
import { productsMedia } from "../constants";
import { Calendar, DynamicHeader } from "../components/utilityComponents";
import CustomButton from "../components/CustomButton";
import InputField from "../components/utilityComponents/InputField";
import { whatssapConnection } from "../utils";
import InformationTabs from "../components/utilityComponents/informationTabs";

const GolfCarSection = () => {
  const [selectedReservationAmount, setSelectedReservationAmount] =
    useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentInformationTab, setCurrentInformationTab] = useState("Tarifas");

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
    { value: "5", label: "5" },
    { value: "6", label: "6" },
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

  const handleInformationTab = (tab) => {
    setCurrentInformationTab(tab);
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

  useEffect(() => {
    state.userViewingService.state = true;
    state.userViewingService.service = "transporte";
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="w-full flex flex-col items-center h-max pb-10">
        <DynamicHeader />
        <div className="w-[95%] flex flex-col justify-center items-center shadow-md rounded-md p-4 gap-10 bg-white mt-10">
          <InformationTabs tab={handleInformationTab} />

          {currentInformationTab == "Tarifas" && (
            <div className="w-full flex flex-col items-start justify-start">
              <div className="flex flex-col gap-10 items-start justify-center">
                <div className="flex flex-col gap-2 font-sen font-lg">
                  <p className="font-bold">1 a 2 personas:</p>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* De 9 A.M a 6 P.M:</p>
                    <p>$220,000 COP</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* 24h:</p>
                    <p>$250,000 COP</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-sen font-lg">
                  <p className="font-bold">3 a 4 personas:</p>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* De 9 A.M a 6 P.M:</p>
                    <p>$250,000 COP</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* 24h:</p>
                    <p>$280,000 COP</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-sen font-lg">
                  <p className="font-bold">5 a 6 personas:</p>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* De 9 A.M a 6 P.M:</p>
                    <p>$280,000 COP</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold">* 24h:</p>
                    <p>$300,000 COP</p>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}

          {currentInformationTab == "Promociones" && (
            <div className="w-full flex flex-col items-start justify-start">
              <div className="flex flex-col gap-10 items-start justify-center">
                <p className="font-sen text-lg">
                  {" "}
                  <span className="flex flex-row gap-3 justify-center items-center">
                    Promoción disponible!
                    <img
                      src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/star-struck_1f929.gif"
                      alt=""
                      className="w-10 h-10"
                    />{" "}
                  </span>{" "}
                </p>
                <p className="font-sen text-lg font-bold">
                  * Alquiler por mas de 48 horas consecutivos reciben un 15% de
                  descuento
                </p>
              </div>
            </div>
          )}
          {currentInformationTab == "Reserva" && (
            <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-8 lg:gap-0">
              <div className="md:w-[50%] w-full">
                <ProductMediaViewer media={productsMedia.golfCar} />
              </div>

              <div className="flex">
                <div className="flex flex-col items-center justify-center gap-12 h-fit">
                  <div className="w-full flex flex-row flex-wrap items-center justify-around gap-0 lg:gap-16">
                    <div className="flex flex-col gap-8">
                      <h2 className="font-sen text-lg text-[#1A202C]">
                        Llene los siguientes campos:
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
                          <i className="material-icons-outlined text-[#1A202C] ">
                            groups
                          </i>
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
                            <p>
                              Selected Value: {selectedReservationAmount.label}
                            </p>
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
                      title={
                        <div className="flex flex-row gap-2 w-fit">
                          {" "}
                          <i className="text-[25px] text-white">
                            <WhatssapIcon />
                          </i>{" "}
                          Reservar por WhatsApp
                        </div>
                      }
                      disabled={isButtonDisabled} // disable the button if the form is not completely filled
                      styles="w-34 px-2 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GolfCarSection;
