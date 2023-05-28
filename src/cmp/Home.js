import React from "react";
import "./main.css";

function Home() {
  return (
    <div className="HomePage">
      <div className="Home-header">
        <div className="Home-header-title">
          <div className="leftheader">
            <div className="upperofleft">
              <pre>
                {" "}
                <h1>Welcome, Raj Patel</h1>
              </pre>
            </div>
            <div className="footerofleft">
              <div className="btn-1">
                <div className="b1-p1">Remaining cash </div>
                <div className="b1-p2">
                  <h3>15000</h3>
                </div>
              </div>
              <div className="btn-2">
                <div className="b2-p1">Remaining balance</div>
                <div className="b2-p2">
                  <h3>15000</h3>{" "}
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
          <div className="row-1">
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
          </div>
        </div>
        <div className="incrementActivity">
          <button className="incrementActivityButton">+</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
