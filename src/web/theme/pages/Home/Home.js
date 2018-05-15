import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import HomeBanner from "theme/modules/HomeBanner";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";

const Home = ({ store, category, loading }) => (
  <Page>
    <HomeBanner storeName={store && store.name} />
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
