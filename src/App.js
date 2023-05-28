import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./cmp/Sidebar";
import Home from "./cmp/Home";
import AddExpense from "./cmp/AddExpense";
import Profile from "./cmp/Profile";
import Analyse from "./cmp/Analyse";
// import { Profiler } from "react";

function App() {
  return (
  
      <div className="mainClass">
        <Router>
          <div className="sidebar ">
            <Sidebar />
          </div>

          <div className="mainContainer border">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/addExpense" element={<AddExpense />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analyse" element={<Analyse />} />
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
