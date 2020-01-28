import { ScrollWheel } from "components";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import WindowProvider from "../services/window";
import Interface from "./Interface";

const GlobalStyles = createGlobalStyle`
   body {
      height: 100%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   }
`;

const Shell = styled.div`
  position: relative;
  height: 100vh;
  max-height: 37em;
  width: 370px;
  border-radius: 30px;
  border: 1px solid gray;
  box-shadow: inset 0 0 2.4em #555;
  background: rgb(225, 225, 225);
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(250, 250, 250, 0.3)));
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <WindowProvider>
        <Shell>
          <Interface />
          <ScrollWheel />
        </Shell>
      </WindowProvider>
    </>
  );
};

export default App;
