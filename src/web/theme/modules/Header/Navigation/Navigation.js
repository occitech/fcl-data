import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>Browse sites</ul>
      <ul>Our selection</ul>
      <ul>Our database</ul>
      <ul>contact us</ul>
    </nav>
  );
};

export default Navigation;
