import React, { useState } from "react";

import { Calendar } from "./Calendar.js";
import { SeaCreatureEntries } from "./SeaCreatureEntries.js";

export function SeaCreaturePage() {
  const [month, setMonth] = useState(null);

  return (
    <div
      id="sea-creature-page"
      key="sea-creature-page"
      style={{ padding: "20px" }}
    >
      <Calendar setMonth={setMonth} />
      <SeaCreatureEntries month={month} />
    </div>
  );
}
