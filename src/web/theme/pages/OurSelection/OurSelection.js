import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OurSelectionQuery from "./OurSelectionQuery.gql";
import EnhanceOurSelection from "./EnhanceOurSelection";
import OurSelectionToggler from "./OurSelectionToggler";
import SiteCard from "./SiteCard";
import "./OurSelection.scss";

const fakeData = [
  {
    name: "Wendel’s Chapel",
    description:
      "This neo-Gothic burial vault located in the heart of Hayange, listed as a Historic Monument, was once in the center of the cemetery…",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Chapelle_des_De_Wendel_Hayange.jpg"
  },
  {
    name: "Museum of Illusions",
    description:
      "Unique in Lorraine, the Museum of Illusions offers you the discovery of more than 300 optical and scientific illusions and a magic show…",
    image:
      "https://i.gse.io/gse_media/118/2/1521138521-Museum-of-Illusions-tickets.jpg?h=260&p=1&q=30&w=456&c=1"
  },
  {
    name: "The altar of Motherland",
    description:
      "The altar of the Motherland of Thionville is a symbol of national interest erected during the Revolution. This is the last monument of this type that still exists…",
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    name: "The altar of Motherland",
    description:
      "The altar of the Motherland of Thionville is a symbol of national interest erected during the Revolution. This is the last monument of this type that still exists…",
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  },
  {
    name: "The altar of Motherland",
    description:
      "The altar of the Motherland of Thionville is a symbol of national interest erected during the Revolution. This is the last monument of this type that still exists…",
    image:
      "https://static8.depositphotos.com/1363871/887/i/950/depositphotos_8870167-stock-photo-the-altar-of-motherland-covered.jpg"
  }
];

const cardWidth = 20;

const OurSelection = ({ ourSelectionTranslate, setOurSelectionTranslate }) => {
  return (
    <Fragment>
      <OurSelectionToggler
        ourSelectionTranslate={ourSelectionTranslate}
        setOurSelectionTranslate={setOurSelectionTranslate}
        cardWidth={cardWidth}
        data={fakeData}
      />
      <div
        style={{ transform: `translateX(-${ourSelectionTranslate}em)` }}
        className="our-selection"
      >
        {fakeData.map((site, index) => (
          <SiteCard key={site.name + index} site={site} />
        ))}
      </div>
    </Fragment>
  );
};

OurSelection.PropTypes = {
  ourSelectionTranslate: PropTypes.number,
  setOurSelectionTranslate: PropTypes.func
};

export default EnhanceOurSelection(OurSelectionQuery)(OurSelection);
