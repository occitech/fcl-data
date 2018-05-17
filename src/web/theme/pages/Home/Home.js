import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import Page from "theme/ui/templates/Page";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath.js";
import "./Home.scss";

const Home = ({ category, loading }) => (
  <Page>
    {loading ? (
      <div>Loading ...</div>
    ) : (
      <div className="home">
        <img src={createMediaUrlFromPath(category.image)} />
        <H1>
          <div>History is</div>
          <div> closer than you think!</div>
        </H1>
      </div>
    )}{" "}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
