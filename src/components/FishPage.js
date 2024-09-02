import React, { useState } from "react";

import { Calendar } from "./Calendar.js";
import { FishEntries } from "./FishEntries.js";

// import MonthsEnum from "../data/MonthsEnum.js";
import FishLocationsEnum from "../data/FishLocationsEnum.js";

export function FishPage() {
  const [month, setMonth] = useState(null);

  const arrLocations = Object.values(FishLocationsEnum());

  return (
    <div id="fish-page" key="fish-page" style={{ padding: "20px" }}>
      <Calendar setMonth={setMonth} />

      {arrLocations.map((location) => (
        <div id={`${location}-section`} key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <FishEntries location={location} month={month} />
        </div>
      ))}
    </div>
  );
}
