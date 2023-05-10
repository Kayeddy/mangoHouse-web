import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Save the selected date as you need
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      inline
      dayContentRender={({ date, view }) => {
        // You can customize how each day cell is rendered by using this prop
        return (
          <div style={{ color: "#1A202C" }}>
            {view === "month" && date.getDate()}
          </div>
        );
      }}
    />
  );
};

export default Calendar;
