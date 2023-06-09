import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./cmp/Sidebar";
import Home from "./cmp/Home";
import AddExpense from "./cmp/AddExpense";
import Profile from "./cmp/Profile";
import Analyse from "./cmp/Analyse";
import Titlepage from "./cmp/Titlepage";
import { useState } from "react";
import Transaction from "./cmp/Transaction";
import MyContext from "./MyContext";

function App() {
  const [islog, setLog] = useState(true);

  const handleDataFromChild = (data) => {
    setLog(!islog);
  };
  return (
    <div className="mainClass">
      {islog ? (
        <MyContext.Provider value={handleDataFromChild}>
          <Home />
        </MyContext.Provider>
      ) : (
        <Router>
          <div className="sidebar ">
            <Sidebar />
          </div>

          <div className="mainContainer border">
            <Routes>
              {/* <Route path="/" exact element={<Titlepage />} /> */}
              <Route path="/home" exact element={<Home />} />
              <Route path="/addExpense" element={<AddExpense />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analyse" element={<Analyse />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
