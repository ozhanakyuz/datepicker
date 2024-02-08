import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./App.css"; // Stillerinizi burada içe aktarın


const BeerDatePicker = () => {
  const defaultValue = {
    year: 2024,
    month: 2,
    day: 9,
  };


  const [selectedDay, setSelectedDay] = useState(defaultValue);

  return (
    <div className="app-container">
      <h2 className="calendar-heading">
        Bir bira için vaktiniz olan günü seçiniz.
      </h2>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
      <h4 className="calendar-heading">
        Ve mümkünse whatsapp üzerinden iletiniz çünkü mail servisleri çok pahalıymış.
      </h4>
    </div>
  );
};

export default BeerDatePicker;
