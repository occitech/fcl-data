import {
  getSchemaGeoObjectFromSitesObject,
  getLatLongFromSchemaGeoObject
} from "./adapters";

const dataTourisme = {};

export default {
  Query: {
    data: () => dataTourisme
  },

  DataTourisme: {
    sites: (_, __, context) =>
      context.loadGlobalSitesData().then(sites => {
        return (
          sites &&
          sites.filter(site => site["dc:identifier"]).map(site => {
            if (typeof site.availableLanguage === "string") {
              site.availableLanguage = [site.availableLanguage];
            }
            return {
              id: site["dc:identifier"] ? site["dc:identifier"] : -1,
              name: site["rdfs:label"] ? site["rdfs:label"]["@value"] : null,
              description: site["rdfs:comment"]
                ? site["rdfs:comment"]["@value"]
                : null,
              type: site["@type"] ? site["@type"] : null,
              language: site.availableLanguage ? site.availableLanguage : null
            };
          })
        );
      }),
    site: (_, { id }, context) =>
      context.loadGlobalSitesData().then(sites => {
        return (
          sites &&
          sites.filter(site => site["dc:identifier"] === id).map(site => {
            if (typeof site.availableLanguage === "string") {
              site.availableLanguage = [site.availableLanguage];
            }
            return {
              id: site["dc:identifier"] ? site["dc:identifier"] : -1,
              name: site["rdfs:label"] ? site["rdfs:label"]["@value"] : null,
              description: site["rdfs:comment"]
                ? site["rdfs:comment"]["@value"]
                : null,
              type: site["@type"] ? site["@type"] : null,
              language: site.availableLanguage ? site.availableLanguage : null,
              location: site.isLocatedAt
                ? context
                    .loadSitesLocation(
                      site.isLocatedAt["@id"].replace("data:", "")
                    )
                    .then(response =>
                      context.loadSitesLocation(
                        getSchemaGeoObjectFromSitesObject(response)
                      )
                    )
                    .then(schemaGeo => ({
                      latitude: getLatLongFromSchemaGeoObject(schemaGeo)[
                        "http://schema.org/latitude"
                      ][0]["@value"],
                      longitude: getLatLongFromSchemaGeoObject(schemaGeo)[
                        "http://schema.org/longitude"
                      ][0]["@value"]
                    }))
                : null
            };
          })[0]
        );
      })
  }
};
