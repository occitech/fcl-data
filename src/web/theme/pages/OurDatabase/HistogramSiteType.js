import React, { Component } from "react";
import * as d3 from "d3";

class HistogramSiteType extends Component {
  componentDidMount() {
    if (this.props.sites) {
      let typeHist = {};
      this.props.sites.forEach(site => {
        site.type.forEach(
          type =>
            typeHist[type] &&
            type.search("schema") === -1 &&
            type.search("urn") === -1
              ? (typeHist[type] = typeHist[type] + 1)
              : (typeHist[type] = 1)
        );
      });

      let typeValues = Object.values(typeHist).filter(
        value => value !== 19935 && value > 1000
      );

      d3
        .select("#histogram")
        .selectAll("#histogram span")
        .data(typeValues)
        .enter()
        .append("span");

      d3
        .select("#histogram")
        .selectAll("#histogram span")
        .data(typeValues)
        .exit()
        .remove();

      d3
        .selectAll("#histogram span")
        .data(typeValues)
        .transition()
        .duration(300)
        .delay((typeValue, i) => i * 30)
        .text((typeValue, i) => Object.keys(typeHist)[i] + " : " + typeValue)
        .style("height", typeValue => typeValue / 50 + "px")
        .style("color", "white")
        .style("background", typeValue =>
          d3.interpolateViridis(typeValue / 25000)
        );
    }
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default HistogramSiteType;
