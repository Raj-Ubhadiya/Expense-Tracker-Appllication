import React, { useRef } from "react";

function Loginform({ setLoginform }) {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  // const [success, setSuccess] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
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
        <input type="text" ref={email} required></input>
      </div>
      <div className="password">
        <label>Password</label>
        <br />
        <input type="password" ref={password} required></input>
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
