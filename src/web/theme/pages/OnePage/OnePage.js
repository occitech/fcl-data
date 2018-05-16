import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tile from "theme/modules/Tile";

const OnePage = ({ cardsData }) => {
  return (
    <Fragment>
      {cardsData.map(card => (
        <Tile
          key={card.name}
          style={card.style}
          contentStyle={card.contentStyle}
          title={card.title}
        >
          {card.content}
        </Tile>
      ))}
    </Fragment>
  );
};

OnePage.PropTypes = { cardsData: PropTypes.object };

export default OnePage;
