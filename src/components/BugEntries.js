import React from "react";
import "./entryStyles.css";
import data from "../data/db_bugs.json";

import { CreatureCell } from "./CreatureCell";
import { NoEntriesFound } from "./NoEntriesFound";

export function BugEntries({ location, month }) {
  const allEntries = data.bugs;

  const entries = allEntries.filter((entry) => {
    const matchLocation = entry.location === location;
    const matchMonth = month === null ? true : entry.n_months.includes(month);

    return matchMonth && matchLocation;
  });

  if (entries.length === 0) {
    return <NoEntriesFound label={"bugs"} location={location} />;
  }

  return (
    <div
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
