import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import profilePic from "../assets/profile.png";  
import { FaCamera } from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState({ fullName: "", email: "" });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUser(storedData);
    }
  }, []);

  return (
    <div className="profile-container">
         <div className="profile-card">
      <h2 className="profile-heading"><span>Account Settings</span></h2>
         

        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
          <div className="camera-icon">
            <FaCamera size={14} />
          </div>
          <div className="info">
          <h3>{user.fullName || "User Name"}</h3>
          <p className="email">{user.email || "example@mail.com"}</p>
          </div>
        </div>

       
        <div className="profile-info">
          <p className="about">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        <hr class="dashed-line"></hr>
      </div>
    </div>
  );
}

export default Profile;
