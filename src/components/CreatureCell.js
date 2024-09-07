import React from "react";
import "./entryStyles.css";

import { ImageFetcher } from "./ImageFetcher";

export function CreatureCell({
  location,
  entryName,
  assetName,
  assetFolder,
  size,
}) {
  if (size !== null) {
  }
  return (
    <div key={`${location}-${entryName}-cell`} className="creature-cell">
      <ImageFetcher
        folderName={assetFolder}
        filename={assetName}
        iconEdge="50px"
      />
      <div>{size ?? ""}</div>
    </div>
  );
}
