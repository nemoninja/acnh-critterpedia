import React from "react";

import { BugEntries } from "./BugEntries.js";
import { BugLocationsEnum } from "../data/BugLocationsEnum.js";

export function BugPage({ month }) {
  const allLocations = Object.values(BugLocationsEnum);

  return (
    <div style={{ padding: "20px" }}>
      {allLocations.map((location) => (
        <div key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <BugEntries location={location} month={month} />
        </div>
      ))}
    </div>
  );
}
