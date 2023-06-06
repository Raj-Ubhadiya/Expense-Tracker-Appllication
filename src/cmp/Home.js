import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
function Home() {
  const [userData, setUserData] = useState([]);
  const [expenseInfo, setExpense] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getuserInfoDemo") // API to fetch the data
      .then((response) => response.json()) //API promise.
      .then((data) => {
        setUserData(data.data[0]); //Setting data using setData function.
      })
      .catch((error) => console.error(error)); //error handling

    fetch("http://127.0.0.1:5000/getExpenseDetailDemo") // API to fetch the data
      .then((response) => response.json()) //API promise.
      .then((data) => {
        setExpense(data.data.slice(0, 5)); //Setting data using setData function.
        console.log(data.data);
      })
      .catch((error) => console.error(error)); //error handling
  }, []);

  return (
    <div className="HomePage">
      <div className="Home-header">
        <div className="Home-header-title">
          <div className="leftheader">
            <div className="upperofleft">
              <pre>
                <h1>{`Welcome ${userData.username || ""}`}</h1>
              </pre>
            </div>
            <div className="footerofleft">
              <div className="btn-1">
                <div className="b1-p1">Remaining cash </div>
                <div className="b1-p2">
                  <h3>{`${userData.cashAvailable}`}</h3>
                </div>
              </div>
              <div className="btn-2">
                <div className="b2-p1">Remaining balance</div>
                <div className="b2-p2">
                  <h3>{`${userData.balanceAvailable}`}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="rightheader">poto</div>
        </div>

        {/* <div className="Home-Header-footer"></div> */}
      </div>
      <div className="Home-Recent-Activity">
        <div className="Recnet-activity-header">
          <h3>Recent Activity</h3>
        </div>
        <div className="display-activities">
          {expenseInfo.map((exp) => (
            <div className="row-1" key={exp._id}>
              <div className="col">{exp.title}</div>
              <div className="col">{exp.amount}</div>
              <div className="col">{exp.mode}</div>
              <div className="col">{exp.category}</div>
            </div>
          ))}
          {/* <div className="row-1">
            <div className="col-1">Title</div>
            <div className="col-2">Amount</div>
            <div className="col-3">Mode</div>
            <div className="col-4">category</div>
          </div>
          <div className="row-2">
            <div className="col-1">Title</div>
            <div className="col-2">Amount</div>
            <div className="col-3">Mode</div>
            <div className="col-4">category</div>
          </div>
          <div className="row-3">
            <div className="col-1">Title</div>
            <div className="col-2">Amount</div>
            <div className="col-3">Mode</div>
            <div className="col-4">category</div>
          </div>
          <div className="row-4">
            <div className="col-1">Title</div>
            <div className="col-2">Amount</div>
            <div className="col-3">Mode</div>
            <div className="col-4">category</div>
          </div> */}
        </div>
        <div className="incrementActivity">
          <button className="incrementActivityButton">+</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
