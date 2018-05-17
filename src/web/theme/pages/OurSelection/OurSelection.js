import React from "react";
import PropTypes from "prop-types";
import OurSelectionQuery from "./OurSelectionQuery";
import EnhanceOurSelection from "./OurSelectionQuery";
const OurSelection = () => {
  return <div>z</div>;
};

OurSelection.PropTypes = {};

export default EnhanceOurSelection(OurSelectionQuery)(OurSelection);
