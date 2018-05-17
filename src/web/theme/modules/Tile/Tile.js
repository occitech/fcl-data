import React from "react";
import PropTypes from "prop-types";
import ContentTile from "./ContentTile";
import "./Tile.scss";

const Tile = ({ title, children, style, contentStyle }) => {
  const TileClass = `tile${style ? " tile--" + style : ""}`;

  return (
    <div className={TileClass}>
      <ContentTile style={contentStyle} title={title}>
        {children}
      </ContentTile>
    </div>
  );
};

Tile.propTypes = {
  style: PropTypes.oneOf(["light-blue", "red", "blue"])
};

export default Tile;
