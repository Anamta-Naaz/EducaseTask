import React from "react";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h2 className="landing-title">Welcome to PopX</h2>
        <p className="landing-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;
