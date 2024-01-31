import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./root";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { default_theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={default_theme}>
    <CssBaseline />
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
