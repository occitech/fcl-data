import { app_key } from "../../../../config.js";
// import json from "../../../../data.datatourisme.gouv.sauvegarde.json";

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
          .catch(error => {
            console.error("request error check the : ");
            if (error.response) {
              console.error("error.response.data");
              console.error("error.response.status");
              console.error("error.response.headers");
            } else if (error.request) {
              console.error("error.request");
              console.error(
                "\n---- KNOWN ISSUE ----\n\nDataTourism api is currently unvailable. \ncheck the loader.js where the request has been sent for further details\n\n---------------------\n"
              );

              /**
               *
               *  If you have a dump of the data you can place it
               *  in a data.datatourisme.gouv.sauvegarde.json file
               *  at the root of your project,
               *
               *  import it in this file
               *  name it json
               *  and uncomment the code below
               *
               */

              // return json["@graph"].filter(
              //   site =>
              //     site["@type"] &&
              //     typeof site["@type"] === "object" &&
              //     site["@type"].some(type => type === "CulturalSite")
              // );
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error("Error.message :", error.message);
            }
            console.error("error.config :", error.config);
          })
      : Promise.resolve(false),
  loadSitesLocation: dataCode =>
    dataTourismeClient
      .get(`/${dataCode}?format=jsonld`)
      .then(response => response.data)
});
