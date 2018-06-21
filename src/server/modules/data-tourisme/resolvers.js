const dataTourisme = {};

const FilterObjectsByChildrenKey = (objects, assertingKey) => {
  return objects.filter(object => {
    let objectFound = false;
    Object.keys(object).forEach(key => {
      if (key === assertingKey) {
        objectFound = true;
      }
    });
    return objectFound;
  });
};

const getSchemaPictureObjectFromSitesObject = response => {
  return FilterObjectsByChildrenKey(
    response,
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedResource"
  )[0][
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedResource"
  ][0]["@id"].replace("https://data.datatourisme.gouv.fr/", "");
};
const getPictureUrlFromSchemaPictureObject = schemaPic => {
  return FilterObjectsByChildrenKey(
    schemaPic,
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locator"
  )[0];
};
const getSchemaGeoObjectFromSitesObject = response => {
  return FilterObjectsByChildrenKey(response, "http://schema.org/geo")[0][
    "http://schema.org/geo"
  ][0]["@id"].replace("https://data.datatourisme.gouv.fr/", "");
};
const getLatLongFromSchemaGeoObject = schemaGeo => {
  return FilterObjectsByChildrenKey(schemaGeo, "http://schema.org/latitude")[0];
};

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
              language: site.availableLanguage ? site.availableLanguage : null,
              hasRepresentation: site.hasRepresentation ? true : false
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
                : null,
              picture: site.hasRepresentation
                ? context
                    .loadSitesLocation(
                      site.hasRepresentation["@id"].replace("data:", "")
                    )

                    .then(response =>
                      context.loadSitesLocation(
                        getSchemaPictureObjectFromSitesObject(response)
                      )
                    )
                    .then(
                      schemaPic =>
                        getPictureUrlFromSchemaPictureObject(schemaPic)[
                          "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locator"
                        ][0]["@value"]
                    )
                : null
            };
          })[0]
        );
      })
  }
};
