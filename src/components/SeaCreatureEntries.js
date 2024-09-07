import React from "react";

import { ImageFetcher } from "./ImageFetcher";
import data from "../data/db_sea_creatures.json";

const cellEdge = "80px";

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

  const numCols = 10;
  const numRows = entries.length / numCols;

  return (
    <div
      id={"sea-creature-entries"}
      key={"sea-creature-entries"}
      style={{
        paddingTop: "10px",
        paddingBottom: "20px",
      }}
    >
      <div
        id={"sea-creature-entries-grid"}
        key={"sea-creature-entries-grid"}
        style={{
          alignItems: "center",
          display: "grid",
          gridGap: 2,
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          justifyContent: "center",
          margin: "auto",
          width: cellEdge,
        }}
      >
        {entries.map((entry) => {
          return (
            <div id={`${entry.name}-cell`} key={`${entry.name}-cell`}>
              <button
                onClick={() => {}}
                id={`${entry.name}-button`}
                key={`${entry.name}-button`}
                style={{
                  alignItems: "center",
                  backgroundColor: "None",
                  border: "solid 2px black",
                  display: "flex",
                  height: cellEdge,
                  justifyContent: "center",
                  margin: -2,
                  width: cellEdge,
                }}
              >
                <ImageFetcher
                  folderName="sea_creatures"
                  filename={entry.image}
                  iconEdge="50px"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
