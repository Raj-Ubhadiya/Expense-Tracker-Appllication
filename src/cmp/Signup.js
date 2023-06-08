import React, { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Loginform from "./Loginform";
import MyContext from "./../MyContext";

function Signup({ setSignupform }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [create, setCreate] = useState(false);

  const sendDataToParent = useContext(MyContext);

  const handleCreate = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "User Created") {
          // <Loginform />;
          setCreate(true);
          sendDataToParent(create);
          console.log(data);
        }
      });
  };
  return (
    <form className="Signupform" id="sign-up">
      <div className="signuptitle">
        <div className="Closebtn">
          <button onClick={() => setSignupform(false)}>*</button>
        </div>
        <h2>Sign up</h2>
      </div>
      <div className="signupformimputs">
        <div className="e-mail">
          <label>Email</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="name">
          <label>username</label>
          <br />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="Number">
          <label>password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="submit">
          <button type="create" onClick={(e) => handleCreate(e)}>
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
