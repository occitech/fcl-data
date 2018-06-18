import React from "react";
import PropTypes from "prop-types";
import IconButton from "theme/ui/atoms/Icon/IconButton";

const OurSelectionToggler = ({
  ourSelectionTranslate,
  setOurSelectionTranslate,
  cardWidth,
  data
}) => {
  return (
    <div className="our-selection__toggler">
      <strong>Ready to discover awesome historical places?</strong>
      <div>
        <IconButton
          onClick={() => {
            if (ourSelectionTranslate > 0) {
              setOurSelectionTranslate(ourSelectionTranslate - cardWidth);
            }
          }}
          icon="angle-left"
        >
          left
        </IconButton>
        <IconButton
          onClick={() => {
            if (ourSelectionTranslate < (data.length - 3) * cardWidth) {
              setOurSelectionTranslate(ourSelectionTranslate + cardWidth);
            }
          }}
          icon="angle-right"
        >
          right
        </IconButton>
      </div>
    </div>
  );
};

OurSelectionToggler.PropTypes = {
  ourSelectionTranslate: PropTypes.number,
  setOurSelectionTranslate: PropTypes.func,
  cardWidth: PropTypes.number,
  data: PropTypes.array
};

export default OurSelectionToggler;
