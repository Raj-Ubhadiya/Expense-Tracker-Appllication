import React from "react";

function Profile() {
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
            <span>
            /
            </span>
          </div>
        </div>
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="newaddexpensebutton">
        <button>+</button>
      </div>
    </div>
  );
}

export default Profile;
