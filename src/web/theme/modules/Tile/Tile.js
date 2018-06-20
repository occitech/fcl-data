import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

const Tile = ({ name, title, children, style, contentStyle }) => {
  const TileClass = `tile${style ? " tile--" + style : ""}`;
  const contentClass = `tile__content ${
    contentStyle ? "tile__content--" + contentStyle : ""
  }`;

  return (
    <div id={name} className={TileClass}>
      <div className={contentClass}>
        {title}
        <div className="tile__content__description">{children}</div>
      </div>
    </div>
  );
};

Tile.PropTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.oneOf(["light-blue", "red", "blue"]),
  contentStyle: PropTypes.oneOf(["default", "card", "center"])
};

export default Tile;
