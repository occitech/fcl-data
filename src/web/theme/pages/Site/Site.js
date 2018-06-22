import React from "react";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";

import Tile from "theme/modules/Tile";
import Actions from "theme/modules/ProductSynthesis/Actions";
import TitleWithDescription from "theme/ui/molecules/TitleWithDescription";
import { H2 } from "theme/ui/atoms/Typography/Heading";
import EnhanceSite from "./EnhanceSite";
import SiteQuery from "./SiteQuery.gql";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import "./site.scss";

const Site = ({ loading, site }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  } else if (!site) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div className="site">
      <div className="site__picture">
        {site.picture && (
          <img alt={site.name} src={createMediaUrlFromPath(site.picture)} />
        )}
      </div>
      <Tile
        style={"light-blue"}
        contentStyle={"card"}
        title={
          <TitleWithDescription
            title={<H2>{site.name}</H2>}
            description={
              <div className="site__title-description">{site.description}</div>
            }
          />
        }
        rightSide={
          site.location ? (
            <Map
              center={[site.location.latitude, site.location.longitude]}
              zoom={14}
              style={{ height: "400px", width: "100%", overflow: " hidden" }}
            >
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                key={site.name}
                position={[site.location.latitude, site.location.longitude]}
                icon={
                  new Icon.Default({
                    imagePath: "/static/media/",
                    iconUrl: `${icon.replace(/\/static\/media\//, "")}`,
                    shadowUrl: `${shadow.replace(/\/static\/media\//, "")}`
                  })
                }
              >
                <Popup>
                  <div>
                    <div>Site name ─ {site.name}</div>
                  </div>
                </Popup>
              </Marker>
            </Map>
          ) : (
            <div>Location not provided</div>
          )
        }
      >
        <Actions product={site} />
      </Tile>
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ id: props.id || props.match.params.id })),
  EnhanceSite(SiteQuery)
)(Site);
