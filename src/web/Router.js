import React, { Fragment } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router/Route";

import Layout from "./theme/ui/templates/Layout";
import Header from "./theme/modules/Header";
import Footer from "./theme/modules/Footer";
import Home from "./theme/pages/Home";
import Site from "./theme/pages/Site";

import OnePage from "theme/pages/OnePage";
import NotFound from "./theme/pages/NotFound";

export default () => (
  <BrowserRouter>
    <Layout header={<div />} footer={<Footer />}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Fragment>
                <Header />
                <Home />
                <OnePage />
              </Fragment>
            );
          }}
        />
        <Route exact path="/site/:id" component={() => <Site />} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
