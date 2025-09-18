import React, { useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
    }));

    navigate("/profile"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name<span>*</span></label>
            <input 
              type="text" 
              name="fullName"
              placeholder="Enter full name" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Phone Number<span>*</span></label>
            <input 
              type="text" 
              name="phone"
              placeholder="Enter phone number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Email Address<span>*</span></label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter email address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Password<span>*</span></label>
            <input 
              type="password" 
              name="password"
              placeholder="Enter password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input 
              type="text" 
              name="company"
              placeholder="Enter company name" 
              value={formData.company}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="radio-group">
            <p>Are you an Agency?<span>*</span></p>
            <label>
              <input 
                type="radio" 
                name="agency" 
                value="yes"
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="agency" 
                value="no"
                onChange={handleChange}
              /> No
            </label>
          </div>

          <button type="submit" className="btn-create">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

