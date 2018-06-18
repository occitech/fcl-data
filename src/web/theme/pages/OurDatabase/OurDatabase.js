import React from "react";
import PropTypes from "prop-types";
import EnhanceOurDatabase from "./EnhanceOurDatabase";
import OurDatabaseQuery from "./OurDatabaseQuery.gql";
import "./OurDatabase.scss";

const OurDatabase = ({ sites, loading }) => {
  return (
    <div>
      <div id="histogram" />
    </div>
  );
};

OurDatabase.propTypes = {};

export default EnhanceOurDatabase(OurDatabaseQuery)(OurDatabase);
