import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      Welcome everyone, these are our services
      <br />
      <Link to="/services/marketing" style={{ marginRight: "10px" }}>
        Marketing
      </Link>
      <Link to="/services/development">Development</Link>
      <Outlet />
    </div>
  );
};

export default Services;
