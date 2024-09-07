import React from "react";

import { ImageFetcher } from "./ImageFetcher";
import data from "../data/db_fish.json";

const cellEdge = "70px";

export function FishEntries({ location, month }) {
  const allEntries = data.fish;

  const entries = allEntries.filter((entry) => {
    const matchLocation = entry.locations.includes(location);
    const matchMonth = month === null ? true : entry.n_months.includes(month);

    return matchMonth && matchLocation;
  });

  if (entries.length === 0) {
    return (
      <div id={`fish-entries-${location}`} key={`fish-entries-${location}`}>
        No fishes available in {month}!
      </div>
    );
  }

  const numCols = 10;
  const numRows = entries.length / numCols;

  return (
    <div
      id={`fish-entries-${location}`}
      key={`fish-entries-${location}`}
      style={{
        paddingTop: "10px",
        paddingBottom: "20px",
      }}
    >
      <div
        id={`fish-entries-grid-${location}`}
        key={`fish-entries-grid-${location}`}
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
            <div
              id={`${location}-${entry.name}-cell`}
              key={`${location}-${entry.name}-cell`}
            >
              <button
                onClick={() => {}}
                id={`${location}-${entry.name}-button`}
                key={`${location}-${entry.name}-button`}
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
                  folderName="fish"
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
