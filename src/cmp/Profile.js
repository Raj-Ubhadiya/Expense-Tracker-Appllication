import { set } from "mongoose";
import React, { useEffect, useState } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [cashAvailable, setcashAvailable] = useState("");
  const [balanceAvailable, setbalanceAvailable] = useState("");
  const [avgExpenseLimit, setavgExpenseLimit] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5000/updateUserDemo", {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        cashAvailable,
        balanceAvailable,
        avgExpenseLimit,
      }),
    }).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="profilepage">
      <div className="profileheader">
        <h2>Profile</h2>
      </div>
      <div className="adduserinfoform">
        <div className="formupperpart">
          <div className="userinputs">
            <div className="titleinput">
              <input type="text" placeholder="Title" />
            </div>
            <div className="dailylimitinput">
              <input type="text" placeholder="dailyamount" />
            </div>
            <div className="Availablecashinput">
              <input type="text" placeholder="availablecash" />
            </div>
            <div className="avilablebalanceinput">
              <input type="text" placeholder="availablebalance" />
            </div>
          </div>
          <div className="imageinput">
            <img className="profileimage" src="download.jpeg" alt="" />
            <span>/</span>
          </div>
        </div>
        <div className="submitButton">
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
      <div className="newaddexpensebutton">
        <button>+</button>
      </div>
    </div>
  );
}

export default Profile;
