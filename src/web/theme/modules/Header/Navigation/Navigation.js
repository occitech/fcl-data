import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="http://0.0.0.0:8080/#header">Home</a>
      <a href="http://0.0.0.0:8080/#our-selection">Our selection</a>
      <a href="http://0.0.0.0:8080/#our-database">Our database</a>
      <a href="http://0.0.0.0:8080/#our-demo">Our demo</a>
      <a href="http://0.0.0.0:8080/#footer">Contact us</a>
    </nav>
  );
};

export default Navigation;
