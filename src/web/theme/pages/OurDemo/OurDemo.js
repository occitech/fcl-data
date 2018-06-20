import React from "react";
import Link from "theme/ui/atoms/Typography/Link";
import "./OurDemo.scss";

const ourProduct = [
  {
    link: "https://github.com/occitech/fcl-onlinetooffline",
    name: "Online to Offline"
  },
  { link: "https://github.com/occitech/fcl-blogshop", name: "Blogshop" },
  {
    link: "https://github.com/front-commerce/front-commerce-lite",
    name: "Front-Commerce-Lite"
  },
  {
    link: "https://github.com/occitech/front-commerce",
    name: "Front-Commerce"
  },
  {
    link:
      "https://github.com/search?q=topic%3Afront-commerce-lite&type=Repositories",
    name: "All repositories on the topic"
  }
];

const OurDemo = () => {
  return (
    <div className="our-demo">
      <div className="our-demo__sub-title">
        Check out our other demos sites:
      </div>
      <div className="our-demo__content">
        {ourProduct.map(demo => (
          <Link key={demo.name} external to={demo.link}>
            {demo.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurDemo;
