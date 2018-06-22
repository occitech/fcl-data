import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#header">Home</a>
      <a href="#our-selection">Our selection</a>
      <a href="#our-database">Our database</a>
      <a href="#our-demo">Our demo</a>
      <a href="#footer">Contact us</a>
    </nav>
  );
};

export default Navigation;
