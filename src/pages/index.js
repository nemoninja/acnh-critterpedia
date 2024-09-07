import * as React from "react";

import { MainBody } from "../components/MainBody";

const IndexPage = () => (
  <main>
    <h1>nemoninja's ACNH Critterpedia</h1>
    <p>A simple wildlife availability checker for ACNH.</p>
    {MainBody()}
  </main>
);
export const Head = () => <title>nemoninja's ACNH Critterpedia</title>;

export default IndexPage;
