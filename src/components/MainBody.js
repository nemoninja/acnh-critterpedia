import React, { useState } from "react";

import { Calendar } from "./Calendar";
import { BugPage } from "./BugPage";
import { FishPage } from "./FishPage";
import { SeaCreaturePage } from "./SeaCreaturePage";

export function MainBody() {
  const [month, setMonth] = useState(null);

  return (
    <div>
      <Calendar setMonth={setMonth} />
      <BugPage month={month} />
      <FishPage month={month} />
      <SeaCreaturePage month={month} />
    </div>
  );
}
