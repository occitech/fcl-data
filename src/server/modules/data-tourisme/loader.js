import { app_key } from "../../../../config.js";

export default (diffuseurClient, dataTourismeClient) => ({
  loadGlobalSitesData: () =>
    diffuseurClient
      ? diffuseurClient
          .get(`/webservice/1532da3f576cd29193bb2d309f339e39/${app_key}`)
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
      : Promise.resolve(false),
  loadSitesLocation: dataCode =>
    dataTourismeClient
      .get(`/${dataCode}?format=jsonld`)
      .then(response => response.data)
});
