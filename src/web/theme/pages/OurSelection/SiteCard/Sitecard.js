import React from "react";
import PropType from "prop-types";
import "./SiteCard.scss";

const fakeData = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Chapelle_des_De_Wendel_Hayange.jpg"
  },
  {
    image:
      "https://i.gse.io/gse_media/118/2/1521138521-Museum-of-Illusions-tickets.jpg?h=260&p=1&q=30&w=456&c=1"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image: "http://ekladata.com/DmNtkhQ5oRqIRiP4W94dGQM3ntA.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  }
];

const SiteCard = ({ site, siteIndex }) => {
  return (
    <div className="site-card">
      <div className="site-card__image">
        {site.image ? (
          <img alt={site.name} src={site.image} />
        ) : (
          <img alt={site.name} src={fakeData[siteIndex].image} />
        )}
      </div>
      <div className="site-card__content">
        <div className="site-card__content__name">
          <span>{site.name}</span>
        </div>
        <div className="site-card__content__description">
          {site.description.length > 250
            ? site.description.slice(0, 250) + "..."
            : site.description}
        </div>
      </div>
    </div>
  );
};

SiteCard.PropType = {
  site: PropType.object,
  siteIndex: PropType.number
};
export default SiteCard;
