import { useEffect } from "react";
import state from "../context";
import { useReservationForm } from "../hooks/useReservationForm"; // Import the custom hook
import Tariffs from "../components/Tariffs";
import Promotions from "../components/Promotions";
import ReservationForm from "../components/ReservationForm";
import InformationTabs from "../components/InformationTabs"; // Make sure to import InformationTabs
import DynamicHeader from "../components/utilityComponents/DynamicHeader";
import ProductMediaViewer from "../components/ProductMediaViewer";
import { productsMedia } from "../constants";

const ApartmentSection = () => {
  const {
    formState,
    setFormState, // Make sure to also import setFormState from the hook if necessary
    handleFieldChange,
    handleReservation,
    isFormValid,
  } = useReservationForm();

  // Function to update the current tab
  const setCurrentTab = (tab) => {
    setFormState((prevState) => ({ ...prevState, currentInformationTab: tab }));
    console.log(tab);
  };

  // Function to render content based on the current tab
  const renderTabContent = () => {
    switch (formState.currentInformationTab) {
      case "Tarifas":
        return <Tariffs section="apartments" />;
      case "Promociones":
        return <Promotions section="apartments" />;
      case "Reserva":
        return (
          <ReservationForm
            formState={formState}
            handleFieldChange={handleFieldChange}
            handleDateChange={(date) => handleFieldChange("selectedDate", date)}
            handleReservationAmountChange={(option) =>
              handleFieldChange("selectedReservationAmount", option)
            }
            handleReservation={handleReservation}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    state.userViewingService.service = "lodging";
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden modal-scrollable-content">
      <DynamicHeader />
      <div className="w-full h-fit p-8 px-32 flex flex-col gap-10">
        <ProductMediaViewer media={productsMedia.apartments} />
        <div className="flex flex-col gap-12 p-4 md:p-10 bg-white rounded-md">
          <InformationTabs
            currentTab={formState.currentInformationTab}
            setCurrentTab={setCurrentTab}
          />
          {renderTabContent()}
        </div>

        {/* Other content and logic as needed */}
      </div>
    </div>
  );
};

export default ApartmentSection;
