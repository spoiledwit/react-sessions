import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const elm = document.getElementById("root");

createRoot(elm).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
