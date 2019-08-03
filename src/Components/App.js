import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/styles/GlobalStyles.js";
import Theme from "src/styles/Theme.js";
import Router from "src/components/Router.js";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
);
