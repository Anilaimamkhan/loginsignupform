import React, { useState } from "react";
import img1 from "../assets/image/img2.jpg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   handle Singup
 const handleLogin = (e) => {
  e.preventDefault();
  const getDetails = JSON.parse(localStorage.getItem("input") || "[]");

  const match = getDetails.find(
    (item) => item.email === input.email && item.password === input.password
  );

  if (!input.email || !input.password) {
    alert("Please enter email and password");
  } else if (match) {
    alert("Login SuccessFully");
    navigate("/home");
  } else {
    setMsg("Invalid email or password");
  }
};

  return (
    <>
      <h3>{msg}</h3>
      <div className="mainContainer">
        <div className="singupContainer">
          <div className="inputBox">
            <h2>Login Form</h2>
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={input.email}
              />
              <input
                type="number"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={input.password}
              />
            </form>
            <p>
              If you have to create Account? <a href="/">Singup</a>
            </p>
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="image">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
