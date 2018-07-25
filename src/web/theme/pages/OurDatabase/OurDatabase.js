import React from "react";
import HistogramSiteType from "./HistogramSiteType";
import LanguageHistogram from "./LanguageHistogram";
import EnhanceOurDatabase from "./EnhanceOurDatabase";
import OurDatabaseQuery from "./OurDatabaseQuery.gql";
import "./OurDatabase.scss";

const OurDatabase = ({ sites, loading }) => {
  return sites ? (
    <div className="our-database">
      <div className="our-database__graph">
        <HistogramSiteType sites={sites} id="sites-types" />
      </div>
      <div className="our-database__graph">
        <LanguageHistogram sites={sites} id="languages" />
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

OurDatabase.propTypes = {};

export default EnhanceOurDatabase(OurDatabaseQuery)(OurDatabase);
