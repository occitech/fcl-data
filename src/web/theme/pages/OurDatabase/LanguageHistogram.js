import React, { Component } from "react";
import * as d3 from "d3";

class LanguageHistogram extends Component {
  componentDidMount() {
    if (this.props.sites) {
      let languageData = {};
      this.props.sites.forEach(site => {
        site.language &&
          site.language.forEach(language => {
            switch (language) {
              case "Allemand":
                language = "DE";
                break;
              case "all":
                language = "DE";
                break;
              case "de":
                language = "DE";
                break;
              case "Arabe":
                language = "AR";
                break;
              case "ar":
                language = "AR";
                break;
              case "Anglais":
                language = "EN";
                break;
              case "en":
                language = "EN";
                break;
              case "Basque":
                language = "EU";
                break;
              case "eu":
                language = "EU";
                break;
              case "Catalan":
                language = "CA";
                break;
              case "ca":
                language = "CA";
                break;
              case "Chinois":
                language = "ZH";
                break;
              case "zh":
                language = "ZH";
                break;
              case "Danois":
                language = "DA";
                break;
              case "da":
                language = "DA";
                break;
              case "Espagnol":
                language = "ES";
                break;
              case "es":
                language = "ES";
                break;
              case "Français":
                language = "FR";
                break;
              case "fr":
                language = "FR";
                break;
              case "Hébreu":
                language = "HE";
                break;
              case "he":
                language = "HE";
                break;
              case "Italien":
                language = "IT";
                break;
              case "it":
                language = "IT";
                break;
              case "Japonais":
                language = "JA";
                break;
              case "ja":
                language = "JA";
                break;
              case "Néerlandais":
                language = "NL";
                break;
              case "nl":
                language = "NL";
                break;
              case "Occitan":
                language = "OC";
                break;
              case "oc":
                language = "OC";
                break;
              case "Polonais":
                language = "PL";
                break;
              case "pl":
                language = "PL";
                break;
              case "Portugais":
                language = "PT";
                break;
              case "pt":
                language = "PT";
                break;
              case "Russe":
                language = "RU";
                break;
              case "ru":
                language = "RU";
                break;
              default:
              // language = "N/A";
            }

            languageData[language]
              ? (languageData[language] = languageData[language] + 1)
              : (languageData[language] = 1);
          });
      });

      let languageDataReduced = [];
      Object.values(languageData)
        .filter(value => value > 5)
        .map((d, index) =>
          languageDataReduced.push([Object.keys(languageData)[index], d])
        );
      var margin = { top: 30, right: 30, bottom: 30, left: 30 };
      var width = 800 - margin.left - margin.right;
      var height = 500 - margin.top - margin.bottom;
      var svg = d3
        .select("svg#graph2")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
      var g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var x = d3
        .scaleBand()
        .rangeRound([0, width])
        .padding(0.2)
        .domain(languageDataReduced.map(d => d[0].toUpperCase()));

      var y = d3
        .scaleLinear()
        .rangeRound([height, 0])
        .domain([
          0,

          languageDataReduced
            .map(d => d[1])
            .reduce((prev, current) => (prev > current ? prev : current))
        ]);

      g
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .append("text")
        .attr("fill", "#000")
        .attr("x", width - 5)
        .attr("dy", "2em")
        .attr("text-anchor", "end")
        .text("Analyst");

      g
        .append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("nummber of sites by supported language");

      g
        .selectAll(".bar")
        .data(languageDataReduced)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d[0].toUpperCase()))
        .attr("y", d => y(d[1]))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d[1]))
        .attr("fill", d => d3.rgb(d[1], 99, 71) + "");
    }
  }

  render() {
    return <svg id={this.props.id} />;
  }
}

export default LanguageHistogram;
