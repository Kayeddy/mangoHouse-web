import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../context"; // assuming state is your global state in Valtio
import { whatssapConnection } from "../utils"; // ensure this utility is correctly exported from the utils file

export const useReservationForm = () => {
  // Access global state
  const snap = useSnapshot(state);

  // Local form state
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
    selectedReservationAmount: null,
    selectedDate: new Date(),
    currentInformationTab: "Tarifas",
  });

  // Derived state for form validity
  const isFormValid =
    formState.username &&
    formState.email &&
    formState.phone &&
    formState.selectedReservationAmount;

  // Function to handle input changes
  const handleFieldChange = (field, value) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  /**
   * Handles the submission of the reservation form. If the form is valid, it
   * formats the selected date, constructs a WhatsApp URL with the user's
   * reservation details, and opens this URL in a new tab to start a chat for
   * reservation confirmation.
   */
  const handleReservation = () => {
    if (!isFormValid) return;

    const formattedDate = formState.selectedDate.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const url = whatssapConnection(
      snap.userViewingService.service,
      formState.username,
      formState.email,
      formState.phone,
      formState.selectedReservationAmount.value,
      formattedDate
    );

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Effect to synchronize local form state with global state
  useEffect(() => {
    state.userViewingService.state = true;
    state.userViewingService.service = "hospedaje";
  }, []);

  return {
    formState,
    setFormState,
    handleFieldChange,
    handleReservation,
    isFormValid,
  };
};
