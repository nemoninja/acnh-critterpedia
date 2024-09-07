import React from "react";

import { CreatureCell } from "./CreatureCell";
import data from "../data/db_bugs.json";

export function BugEntries({ location, month }) {
  const allEntries = data.bugs;

  const entries = allEntries.filter((entry) => {
    const matchLocation = entry.location === location;
    const matchMonth = month === null ? true : entry.n_months.includes(month);

    return matchMonth && matchLocation;
  });

  if (entries.length === 0) {
    return (
      <div id={`bug-entries-${location}`} key={`bug-entries-${location}`}>
        No bugs available in {month}!
      </div>
    );
  }

  return (
    <div
      id={`bug-entries-grid-${location}`}
      key={`bug-entries-grid-${location}`}
      className="creature-grid"
      num-entries={entries.length}
    >
      {entries.map((entry) => {
        return (
          <CreatureCell
            location={location}
            entryName={entry.name}
            assetName={entry.image}
            assetFolder="bugs"
          />
        );
      })}
    </div>
  );
}
