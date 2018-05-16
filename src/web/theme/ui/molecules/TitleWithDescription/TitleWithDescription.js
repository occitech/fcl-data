import React from "react";
import PropTypes from "prop-types";
import "./TitleWithDescription.scss";

const TitleWithDescription = ({ title, description }) => {
  return (
    <div className="title-with-description">
      <div className="title-with-description__title">{title}</div>
      <div className="title-with-description__description">{description}</div>
    </div>
  );
};

TitleWithDescription.PropTypes = {
  title: PropTypes.node,
  description: PropTypes.node
};
export default TitleWithDescription;
