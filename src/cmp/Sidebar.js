import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav className="Navbar">
        <div className="homeLink">
          <div className="home-img"></div>
          <Link to="/">Home</Link>
        </div>
        <div className="addExpenseLink">
          <div className="addExp-img"></div>
          <Link to="addExpense">AddExpense</Link>
        </div>
        <div className="profileLink">
          <div className="profile-img"></div> <Link to="profile">Profile</Link>
        </div>
        <div className="analyseLink">
          <div className="analyse-img"></div> <Link to="analyse">Analyse</Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
