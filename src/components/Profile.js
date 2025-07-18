import React from "react";
import { useNavigate } from "react-router-dom"; // for programmatic navigation

const Profile = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user"); // get logged-in username

  //handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user from local storage
    navigate("/login"); // redirect to login page
  };

return (
  <div className="profile-container">
    <div className="profile-box">
      <h2>Welcome, {user}!</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  </div>
);
};

export default Profile;
