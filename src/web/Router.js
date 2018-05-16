import React, { Fragment } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router/Route";

import Layout from "./theme/ui/templates/Layout";
import Header from "./theme/modules/Header";
import Footer from "./theme/modules/Footer";
import Home from "./theme/pages/Home";
import TitleWithDescription from "theme/ui/molecules/TitleWithDescription";
import ContentTile from "theme/modules/ContentTile";
import NotFound from "./theme/pages/NotFound";

const Cards = [
  {
    style: "light-blue",
    title: (
      <TitleWithDescription
        title={<div>title</div>}
        description={<div className="text">1st part</div>}
      />
    ),
    content: <div>content</div>
  },
  {
    style: "blue",
    title: (
      <TitleWithDescription
        title={<div>title</div>}
        description={<div className="text">2nd part</div>}
      />
    ),
    content: <div>content</div>
  },
  {
    style: "light-blue",
    title: (
      <TitleWithDescription
        title={<div>title</div>}
        description={<div className="text">3rd part</div>}
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
                  <ContentTile style={card.style} title={card.title}>
                    {card.content}
                  </ContentTile>
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
