import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import Tile from "theme/modules/Tile";
import TitleWithDescription from "theme/ui/molecules/TitleWithDescription";
import { H2 } from "theme/ui/atoms/Typography/Heading";

const cards = [
  {
    name: "our-selection",
    style: "light-blue",
    contentStyle: "card",
    title: (
      <TitleWithDescription
        title={<H2>Our selection</H2>}
        description={
          <div className="our-selection__title-description">
            <p>
              Sometimes, you don’t have time to search and want instant results.
              <br />
              Be sure to regularly check our Cultural Sites’ Selection.
            </p>
          </div>
        }
      />
    ),
    content: <div>content</div>
  },
  {
    name: "our-database",
    style: "blue",
    title: (
      <TitleWithDescription
        title={<H2>Our database</H2>}
        description={
          <div className="our-database__title-description">
            <p>
              We’re using the powerful database of DataTourisme, available for
              free here. It allows us to customize our products with usefull
              data in order to provide you as much information as we can.
            </p>
            <p>
              <strong>Heritage is an important part of French culture.</strong>
              We wanted to make it accessible for everyone. We hope you will
              find what you seek in our database.
            </p>
            <p>
              Have a look at some charts down below. It will give you an overall
              idea of what you will find on the site.
            </p>
          </div>
        }
      />
    ),
    content: <div>content</div>
  },
  {
    name: "our-demo",
    style: "light-blue",
    title: (
      <TitleWithDescription
        title={<H2>Make this demo a reality!</H2>}
        description={
          <div className="text">
            This was a demo showing you{" "}
            <strong>how to easily play with data</strong>, with Front-Commerce
            Lite. Learn more about the potential off our complete Front-Commerce
            version by clicking here.
          </div>
        }
      />
    ),
    content: <div />
  }
];

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

OnePage.propTypes = { cardsData: PropTypes.array };

export default compose(withProps(props => ({ cardsData: cards })))(OnePage);
