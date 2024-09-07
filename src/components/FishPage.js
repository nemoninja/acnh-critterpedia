import React from "react";

import { FishEntries } from "./FishEntries.js";
import FishLocationsEnum from "../data/FishLocationsEnum.js";

export function FishPage({ month }) {
  const allLocations = Object.values(FishLocationsEnum());

  return (
    <div style={{ padding: "20px" }}>
      {allLocations.map((location) => (
        <div key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <FishEntries location={location} month={month} />
        </div>
      ))}
    </div>
  );
}
