import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import "../style.css";
import { Navbar } from "../components/navbar/Navbar";
import { Overview } from "../components/overview/Overview";
import { Table } from "../components/table/Table";
export const Dashboard = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Navbar/>
        <Overview/>
        <Table/>
      </div>
    </div>
  );
};
