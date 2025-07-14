import React, { useState } from "react";
import img1 from "../assets/image/img1.png";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
const SingUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
    let navigate = useNavigate()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   handle Singup
  const handleSingup = (e) => {
    e.preventDefault();
    if (input.name == "" || input.email == "" || input.password == "") {
      alert("please enter your details");
    } else {
      let getData = JSON.parse(localStorage.getItem("input") || "[]");
      if (!Array.isArray(getData)) {
        getData = [];
      }
      let arr = [...getData];
      arr.push(input);
      localStorage.setItem("input", JSON.stringify(arr));
      alert("singup successFully!");
      navigate("/login")
      setInput({ name: "", email: "", password: "" });
    }
  };
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="singupContainer">
          <div className="inputBox">
            <h2>Singup Form</h2>
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                // value={input.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                // value={input.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                // value={input.password}
              />
            </form>
            <p>
  Already have an account? <Link to="/login">Login</Link>
            </p>
            <button onClick={handleSingup}>singup</button>
          </div>
          <div className="image">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
