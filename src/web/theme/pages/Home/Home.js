import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import Page from "theme/ui/templates/Page";
import { H1 } from "theme/ui/atoms/Typography/Heading";

const Home = ({ category, loading }) => (
  <Page>
    <H1>History is closer than you think!</H1>
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
