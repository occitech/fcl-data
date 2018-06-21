import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OurSelectionQuery from "./OurSelectionQuery.gql";
import EnhanceOurSelection from "./EnhanceOurSelection";
import OurSelectionToggler from "./OurSelectionToggler";
import SiteCard from "./SiteCard";
import "./OurSelection.scss";

const cardWidth = 20;

const OurSelection = ({
  sites,
  loading,
  ourSelectionTranslate,
  setOurSelectionTranslate,
  randomSitesIndex
}) => {
  return loading ? (
    <div> Loading ...</div>
  ) : (
    <Fragment>
      <OurSelectionToggler
        ourSelectionTranslate={ourSelectionTranslate}
        setOurSelectionTranslate={setOurSelectionTranslate}
        cardWidth={cardWidth}
        data={sites}
      />
      <div
        style={{ transform: `translateX(-${ourSelectionTranslate}em)` }}
        className="our-selection"
      >
        {sites.map(
          (site, index) =>
            site.description && (
              <SiteCard key={site.name + index} site={site} siteIndex={index} />
            )
        )}
      </div>
    </Fragment>
  );
};

OurSelection.PropTypes = {
  ourSelectionTranslate: PropTypes.number,
  setOurSelectionTranslate: PropTypes.func,
  loading: PropTypes.bool
};

export default EnhanceOurSelection(OurSelectionQuery)(OurSelection);
