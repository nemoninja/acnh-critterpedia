import React, { useState } from "react";
import "./calendarStyles.css";
import MonthsEnum from "../data/MonthsEnum.js";

export function Calendar({ setMonth }) {
  const [activeMonth, setActiveMonth] = useState(null);

  const allMonths = Object.values(MonthsEnum());

  const handleOnClick = (month) => {
    const newMonth = month === activeMonth ? null : month;
    setActiveMonth(newMonth);
    setMonth(newMonth);
  };

  return (
    <div className="calendar-grid">
      {allMonths.map((month) => (
        <button
          onClick={() => handleOnClick(month)}
          key={`calendar-cell-${month}`}
          className="calendar-cell"
          style={{
            backgroundColor: month === activeMonth ? "yellow" : "white",
          }}
        >
          {month}
        </button>
      ))}
    </div>
  );
}
