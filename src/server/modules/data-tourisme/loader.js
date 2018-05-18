import axios from "axios";

const app_key = "1b503cbf-51b0-414c-8bdd-82c493f87f7d";

export default {
  loadData: () =>
    axios
      .get(
        `https://diffuseur.datatourisme.gouv.fr/webservice/1532da3f576cd29193bb2d309f339e39/${app_key}`
      )
      .then(response =>
        response.data["@graph"].filter(site => {
          return (
            site["@type"] &&
            typeof site["@type"] === "object" &&
            site["@type"].some(type => {
              return type === "CulturalSite";
            })
          );
        })
      )
};
