import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import "./index.css"

const elm = document.getElementById("root");

createRoot(elm).render(
  <HomePage />
);