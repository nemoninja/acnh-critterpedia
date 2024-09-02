import * as React from "react";

import { FishPage } from "../components/FishPage";

const IndexPage = () => (
  <main>
    <h1>nemoninja's ACNH Critterpedia</h1>
    <p>A simple wildlife availability checker for ACNH.</p>
    <div>{FishPage()}</div>
  </main>
);

export const Head = () => <title>nemoninja's ACNH Critterpedia</title>;

export default IndexPage;
