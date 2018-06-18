import React from "react";
import PropType from "prop-types";
import "./SiteCard.scss";

const SiteCard = ({ site }) => {
  return (
    <div className="site-card">
      <div className="site-card__image">
        <img src={site.image} alt="site" />
      </div>
      <div className="site-card__content">
        <div className="site-card__content__name">
          <span>{site.name}</span>
        </div>
        <div className="site-card__content__description">
          {site.description}
        </div>
      </div>
    </div>
  );
};

SiteCard.PropType = {
  site: PropType.object
};
export default SiteCard;
