import React from "react";
import PropTypes from "prop-types";
import "./ContentTile.scss";

const ContentTile = ({ title, children, style }) => {
  const contentClass = `content-tile${style ? "--" + style : ""}`;
  return (
    <div className={contentClass}>
      {title}
      <div className="content-tile__content">{children}</div>
    </div>
  );
};

ContentTile.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.oneOf(["default", "card"])
};

export default ContentTile;
