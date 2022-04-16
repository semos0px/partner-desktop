import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import KakaoProvider from "./context/kakao";
import GlobalStyles from "./styles/globalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <KakaoProvider>
      <GlobalStyles />
      <App tab="home" />
    </KakaoProvider>
  </>
);
