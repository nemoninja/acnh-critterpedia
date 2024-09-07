import React from "react";

import { SeaCreatureEntries } from "./SeaCreatureEntries.js";

export function SeaCreaturePage({ month }) {
  return (
    <div style={{ padding: "20px" }}>
      <SeaCreatureEntries month={month} />
    </div>
  );
}
