import React from "react";
import "./entryStyles.css";
import data from "../data/db_sea_creatures.json";

import { CreatureCell } from "./CreatureCell";
import { NoEntriesFound } from "./NoEntriesFound";

export function SeaCreatureEntries({ month }) {
  const allEntries = data.sea_creatures;

  const entries = allEntries
    .filter((entry) => {
      const matchMonth = month === null ? true : entry.n_months.includes(month);

      return matchMonth;
    })
    .sort((a, b) => a.size - b.size);

  if (entries.length === 0) {
    return <NoEntriesFound label={"sea creatures"} location={"default"} />;
  }

  return (
    <div
      key={"sea-creature-entries-grid"}
      className="creature-grid"
      num-entries={entries.length}
    >
      {entries.map((entry) => {
        return (
          <CreatureCell
            location="default"
            entryName={entry.name}
            assetName={entry.image}
            assetFolder="sea_creatures"
            size={entry.size}
          />
        );
      })}
    </div>
  );
}
