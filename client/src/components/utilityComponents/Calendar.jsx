import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ selectedDate, handleDateChange }) => {
  const today = new Date();

  return (
    <DatePicker
      onChange={handleDateChange}
      selected={selectedDate}
      inline
      minDate={today}
      dayContentRender={({ date, view }) => {
        // You can customize how each day cell is rendered by using this prop
        return (
          <div style={{ color: "#1A202C", padding: "2px" }}>
            {view === "month" && date.getDate()}
          </div>
        );
      }}
    />
  );
};

export default Calendar;
