import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import Page from "theme/ui/templates/Page";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath.js";
import "./Home.scss";

const Home = ({ category, loading }) =>
  console.log(category) || (
    <Page>
      <div className="home">
        <img
          src={createMediaUrlFromPath(
            "/media/catalog/category/adrien-tutin-379257-unsplash_1.png"
          )}
        />
        <H1>History is</H1>
        <H1>closer than you think!</H1>
      </div>
    </Page>
  );

export default EnhanceHome(HomeQuery)(Home);
