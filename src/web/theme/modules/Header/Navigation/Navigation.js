import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <span>Browse sites</span>
      <span>Our selection</span>
      <span>Our dataBase</span>
      <span>Browse sites</span>
    </nav>
  );
};

export default Navigation;
