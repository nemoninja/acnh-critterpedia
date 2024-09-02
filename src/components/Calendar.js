import React, { useState } from "react";

import MonthsEnum from "../data/MonthsEnum.js";

const cellEdge = "50px";

export function Calendar({ setMonth }) {
  const [activeMonth, setActiveMonth] = useState(null);

  const arrayM = Object.values(MonthsEnum());
  const numCols = arrayM.length;
  const numRows = arrayM.length / numCols;

  const handleOnClick = (month) => {
    setActiveMonth(month);
    setMonth(month);
  };

  return (
    <div id="calendar" style={{ padding: "20px" }}>
      <div
        id="calendar-grid"
        key="calendar-grid"
        style={{
          display: "grid",
          gridGap: 1,
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          justifyContent: "center",
          margin: "auto",
          width: cellEdge,
        }}
      >
        {arrayM.map((month) => (
          <button
            onClick={() => handleOnClick(month)}
            id={month}
            key={month}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: month === activeMonth ? "yellow" : "white",
              border: "solid 2px black",
              display: "flex",
              height: cellEdge,
              margin: -2,
              width: cellEdge,
            }}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
