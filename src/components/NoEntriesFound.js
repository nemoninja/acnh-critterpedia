import React from "react";

export function NoEntriesFound({ label, location }) {
  return (
    <div key={`no-entries-found-${location}-${label}`}>
      No {label} are available this month!
    </div>
  );
}
