import React from "react";
import { Link } from "react-router-dom";
const UserPage = ({ classes }) => {
  return (
    <div>
      <h2>Welcome User</h2>
      <span>
        Welcome the demo of multiple page this page is rendered using second
        layout
      </span>
      <Link to="/layout1">To UserLayout</Link>
      <Link to="/layout2">To Dashboard</Link>
    </div>
  );
};

export default UserPage;
