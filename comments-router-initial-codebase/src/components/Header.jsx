import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
      </div>
      <h1>Comments App</h1>
    </div>
  );
};

export default Header;
