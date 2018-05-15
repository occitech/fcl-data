import React from "react";
import PropTypes from "prop-types";
import "./ContentTile.scss";

const ContentTile = ({ title, children, style }) => {
  const ContentTitleClass = `content-tile${style ? "--" + style : ""}`;
  return (
    <div className={ContentTitleClass}>
      {title}
      <div className="content-tile__content">{children}</div>
    </div>
  );
};

ContentTile.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.oneOf(["light-blue", "red", "blue"])
};

export default ContentTile;
