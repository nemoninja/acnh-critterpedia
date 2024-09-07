import React from "react";

import { SeaCreatureEntries } from "./SeaCreatureEntries.js";

export function SeaCreaturePage({ month }) {
  return (
    <div
      id="sea-creature-page"
      key="sea-creature-page"
      style={{ padding: "20px" }}
    >
      <SeaCreatureEntries month={month} />
    </div>
  );
}
