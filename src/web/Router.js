import React, { Fragment } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router/Route";

import Layout from "./theme/ui/templates/Layout";
import Header from "./theme/modules/Header";
import Footer from "./theme/modules/Footer";
import Home from "./theme/pages/Home";
import TitleWithDescription from "theme/ui/molecules/TitleWithDescription";
import Tile from "theme/modules/Tile";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import NotFound from "./theme/pages/NotFound";

const Cards = [
  {
    style: "light-blue",
    contentStyle: "card",
    title: (
      <TitleWithDescription
        title={<H2>Our selection</H2>}
        description={
          <div className="our-selection__title-description">
            <p>
              Sometimes, you don’t have time to search and want instant results.
              Be sure to regularly check our Cultural Sites’ Selection.{" "}
            </p>
            <strong>Ready to discover awesome historical places?</strong>
          </div>
        }
      />
    ),
    content: <div>content</div>
  },
  {
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
    style: "light-blue",
    title: (
      <TitleWithDescription
        title={<H2>title</H2>}
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
    content: <div>content</div>
  }
];

export default () => (
  <BrowserRouter>
    <Layout header={<Header />} footer={<Footer />}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Fragment>
                <Home />
                {Cards.map(card => (
                  <Tile
                    style={card.style}
                    contentStyle={card.contentStyle}
                    title={card.title}
                  >
                    {card.content}
                  </Tile>
                ))}
              </Fragment>
            );
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
