import React from "react";

import { CreatureCell } from "./CreatureCell";
import data from "../data/db_sea_creatures.json";

export function SeaCreatureEntries({ month }) {
  const allEntries = data.sea_creatures;

  const entries = allEntries.filter((entry) => {
    const matchMonth = month === null ? true : entry.n_months.includes(month);

    return matchMonth;
  });

  if (entries.length === 0) {
    return (
      <div id={"sea-creature-entries"} key={"sea-creature-entries"}>
        No sea creatures available in {month}!
      </div>
    );
  }

  return (
    <div
      id={"sea-creature-entries-grid"}
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
          />
        );
      })}
    </div>
  );
}
