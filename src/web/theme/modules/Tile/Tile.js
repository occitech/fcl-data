import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

const Tile = ({ name, title, children, style, contentStyle, rightSide }) => {
  const TileClass = `tile${style ? " tile--" + style : ""}`;
  const contentClass = `tile__content ${
    contentStyle ? "tile__content--" + contentStyle : ""
  }`;

  return (
    <div id={name} className={TileClass}>
      <div className={contentClass}>
        <div className="tile__content__title">{title}</div>
        {rightSide && (
          <div className="tile__content__right-side-data">{rightSide}</div>
        )}
        <div className="tile__content__description">{children}</div>
      </div>
    </div>
  );
};

Tile.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.oneOf(["light-blue", "red", "blue"]),
  contentStyle: PropTypes.oneOf(["default", "card", "center"])
};

export default Tile;
