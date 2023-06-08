import React, { useRef, useState, useContext } from "react";
import MyContext from "./../MyContext";

function Loginform({ setLoginform }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const sendDataToParent = useContext(MyContext);

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/loginUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === "Login Success") {
          setLogin(true);
          sendDataToParent(login);
        }
      });

    // console.log(email.current.value, password.current.value);
    // window.location.reload(true);
    // setSuccess(true);
  };

  return (
    // {success ? ( <Sidebar/>) :
    <form className="loginform">
      <div className="Closebtn">
        <button onClick={() => setLoginform(false)}>*</button>
      </div>
      <div className="title">
        <h2>Login</h2>
      </div>

      <div className="email">
        <label>E-mail</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        ></input>
      </div>
      <div className="password">
        <label>Password</label>
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        ></input>
      </div>
      <div className="Loginbutton">
        <button type="submit" onClick={(e) => handlesubmit(e)}>
          login
        </button>
      </div>
      <p>
        you have not account?
        <span>
          <a href="#sign-up">Sign-up</a>
        </span>
      </p>
    </form>
  );
}

export default Loginform;
