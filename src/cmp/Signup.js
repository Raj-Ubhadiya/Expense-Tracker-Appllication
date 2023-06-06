import React from "react";

function Signup({ setSignupform }) {
  return (
    <form className="Signupform" id="sign-up">
      <div className="signuptitle">
        <div className="Closebtn">
          <button onClick={() => setSignupform(false)}>*</button>
        </div>
        <h2>Sign up</h2>
      </div>
      <div className="signupformimputs">
        <div className="name">
          <label>Name</label>
          <br />
          <input type="text" required />
        </div>
        <div className="Number">
          <label>Number</label>
          <br />
          <input type="text" required />
        </div>
        <div className="e-mail">
          <label>Email</label>
          <br />
          <input type="text" required />
        </div>
        <div className="Bakname">
          <label>BankName</label>
          <br />
          <input type="text" required />
        </div>
        <div className="AccountNumber">
          <label>AccountNumber</label>
          <br />
          <input type="text" required />
        </div>
        <div className="submit">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
