import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReviewCard from "./ReviewCard";
import Topbar from "./Topbar";
import ReviewGrid from "./ReviewGrid";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Topbar />
    {/* <ReviewCard /> */}
    <ReviewGrid />
  </React.StrictMode>
);
