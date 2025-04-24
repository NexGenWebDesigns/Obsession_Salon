import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const ignoredErrors = [
  "ResizeObserver loop completed with undelivered notifications",
];

const originalConsoleError = console.error;
console.error = (...args) => {
  if (ignoredErrors.some((error) => args[0].includes(error))) {
    return;
  }
  originalConsoleError(...args);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
