import React from "react";
import Link from "theme/ui/atoms/Typography/Link";
import "./OurDemo.scss";

const OurDemo = () => {
  return (
    <div className="our-demo">
      <div className="our-demo__sub-title">
        Check out our other demos sites:
      </div>
      <div className="our-demo__content">
        <Link external to="https://github.com/occitech/fcl-onlinetooffline">
          <span>Online to Offline</span>
        </Link>
        <Link external to="https://github.com/occitech/fcl-blogshop">
          <span>Blogshop</span>
        </Link>
        <Link
          external
          to="https://github.com/front-commerce/front-commerce-lite"
        >
          <span>Front-Commerce-Lite</span>
        </Link>
        <Link external to="https://github.com/occitech/front-commerce">
          <span>Front-Commerce</span>
        </Link>
      </div>
    </div>
  );
};

OurDemo.prototype = {};

export default OurDemo;
