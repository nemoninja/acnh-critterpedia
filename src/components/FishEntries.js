import React from "react";
import "./entryStyles.css";
import data from "../data/db_fish.json";

import { CreatureCell } from "./CreatureCell";
import { NoEntriesFound } from "./NoEntriesFound";

export function FishEntries({ location, month }) {
  const allEntries = data.fish;

  const entries = allEntries.filter((entry) => {
    const matchLocation = entry.locations.includes(location);
    const matchMonth = month === null ? true : entry.n_months.includes(month);

    return matchMonth && matchLocation;
  });

  if (entries.length === 0) {
    return <NoEntriesFound label={"fishes"} location={location} />;
  }

  return (
    <div
      key={`fish-entries-grid-${location}`}
      className="creature-grid"
      num-entries={entries.length}
    >
      {entries.map((entry) => {
        return (
          <CreatureCell
            location={location}
            entryName={entry.name}
            assetName={entry.image}
            assetFolder="fish"
          />
        );
      })}
    </div>
  );
}
