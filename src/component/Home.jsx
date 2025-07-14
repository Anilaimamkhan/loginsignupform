import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
 let navigate= useNavigate()
  const handleLogOut = ()=> {
    localStorage.removeItem("input")
    navigate("/")
  }
  return (
    <>
      <div style={{ animation: "fadeIn 0.8s ease-in" }}>
  <h2>Home Page</h2>
  <button onClick={handleLogOut}>Logout</button>
</div>

    </>
  );
};

export default Home;
