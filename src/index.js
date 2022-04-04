import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import GlobalStyles from "./styles/globalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <App tab="home" />
  </>
);
