import React from "react";

import { Calendar } from "./Calendar.js";
import { FishEntries } from "./FishEntries.js";

// import MonthsEnum from "../data/MonthsEnum.js";
import FishLocationsEnum from "../data/FishLocationsEnum.js";

export function FishPage() {
  const arrLocations = Object.values(FishLocationsEnum());
  return (
    <div id="fish-page" key="fish-page" style={{ padding: "20px" }}>
      <div>{Calendar()}</div>
      {arrLocations.map((location) => (
        <div id={`${location}-section`} key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <FishEntries location={location} />
        </div>
      ))}
    </div>
  );
}
