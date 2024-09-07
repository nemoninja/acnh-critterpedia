import React from "react";

import { BugEntries } from "./BugEntries.js";
import { BugLocationsEnum, BugLocationUtil } from "../data/BugLocationsEnum.js";

export function BugPage({ month }) {
  const excludedLocations = BugLocationUtil.excludeFromSections();
  const sectionLocations = Object.values(BugLocationsEnum).filter(
    (location) => !excludedLocations.includes(location)
  );

  return (
    <div id="bug-page" key="bug-page" style={{ padding: "20px" }}>
      {sectionLocations.map((location) => (
        <div id={`${location}-section`} key={`${location}-section`}>
          <h2 style={{ alignText: "center", width: "100%" }}>{location}</h2>
          <BugEntries location={location} month={month} />
        </div>
      ))}
    </div>
  );
}
