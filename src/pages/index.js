import * as React from "react";

import { BugPage } from "../components/BugPage";
import { FishPage } from "../components/FishPage";
import { SeaCreaturePage } from "../components/SeaCreaturePage";

const IndexPage = () => (
  <main>
    <h1>nemoninja's ACNH Critterpedia</h1>
    <p>A simple wildlife availability checker for ACNH.</p>
    <div>{BugPage()}</div>
    <div>{FishPage()}</div>
    <div>{SeaCreaturePage()}</div>
  </main>
);

export const Head = () => <title>nemoninja's ACNH Critterpedia</title>;

export default IndexPage;
