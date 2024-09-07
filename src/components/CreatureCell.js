import React from "react";

import { ImageFetcher } from "./ImageFetcher";

export function CreatureCell({ location, entryName, assetName, assetFolder }) {
  return (
    <div
      id={`${location}-${entryName}-cell`}
      key={`${location}-${entryName}-cell`}
      className="creature-cell"
    >
      <ImageFetcher
        folderName={assetFolder}
        filename={assetName}
        iconEdge="50px"
      />
    </div>
  );
}
