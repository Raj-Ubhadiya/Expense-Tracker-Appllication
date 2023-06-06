import React, { useState } from "react";
import "./main.css";
import Loginform from "./Loginform";
import Signup from "./Signup";

function Titlepage() {
  // const [trigger, setTrigger] = useState();
  const [loginform, setLoginform] = useState(false);
  const [signupform, setSignupform] = useState(false);
  const handleLoginform = () => {
    setLoginform(!loginform);
  };
  const handleSignupform = () => {
    setSignupform(!signupform);
  };

  return (
    <>
      <div className="TitlePage">
       <div className="titlepagecontainer">
       <div className="title">
          <h1>SPLIT APPLICATION</h1>
        </div>
        <div className="registrationbutton">
          {/* {setForm ? <Loginform /> : ""} */}
          <button className="loginbutton" onClick={() => handleLoginform(true)}>
            login
          </button>
          <button
            className="signupbutton"
            onClick={() => handleSignupform(true)}
          >
            Sign up
          </button>
        </div>
       {loginform ? <Loginform setLoginform={setLoginform} /> : ""}

        {signupform ? <Signup setSignupform={setSignupform} /> : ""}
       </div>
      </div>
    </>
  );
}

export default Titlepage;
