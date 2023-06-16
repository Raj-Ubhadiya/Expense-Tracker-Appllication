import React, { useState, useContext } from "react";
import MyContext from "./../MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Loginform({ setLoginform, setSignupform }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);
  const [sec_token, setSec_token] = useState("");

  const sendDataToParent = useContext(MyContext);

  const handlesubmit = (e) => {
    e.preventDefault();

    // toast("User checking");
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
        console.log(data);
        if (data.status === "Login Success") {
          toast.success("login successfull!", { autoClose: 2000 });
          setTimeout(() => {
            setLogin(true);
            // setSignupform(true);
            sendDataToParent([login, username, data.data]);
          }, 3000);
        } else {
          toast.error("Invalid Credential!", { autoClose: 2000 });
        }
      });
  };

  return (
    <>
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
            type="email"
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
            <a href="#sign-up" onClick={() => setSignupform(true)}>
              Sign-up
            </a>
          </span>
        </p>
      </form>
      <ToastContainer />
    </>
  );
}

export default Loginform;
