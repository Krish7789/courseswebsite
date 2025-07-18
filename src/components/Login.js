import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

const Login = () => {
  // states to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // if user already logged in, redirect to profile
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/profile");
    }
  }, [navigate]);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      localStorage.setItem("user", username); // store username
      navigate("/profile"); // navigate to profile page
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {/* login form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
