import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import "../style.css";
export const Dashboard = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>rest</div>
    </div>
  );
};
