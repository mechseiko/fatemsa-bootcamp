// FILE: src/main.jsx | SESSION 7 | The starting point. It puts our <App /> inside the empty div with id="root".
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// BrowserRouter lets the app change "pages" (routes) without reloading the browser.
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
