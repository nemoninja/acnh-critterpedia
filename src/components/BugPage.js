import React, { useState } from "react";

import { Calendar } from "./Calendar.js";
import { BugEntries } from "./BugEntries.js";

import BugLocationsEnum from "../data/BugLocationsEnum.js";

export function BugPage() {
  const [month, setMonth] = useState(null);

  const arrLocations = Object.values(BugLocationsEnum());

  return (
    <div id="bug-page" key="bug-page" style={{ padding: "20px" }}>
      <Calendar setMonth={setMonth} />

      {arrLocations.map((location) => (
        <div id={`${location}-section`} key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <BugEntries location={location} month={month} />
        </div>
      ))}
    </div>
  );
}
