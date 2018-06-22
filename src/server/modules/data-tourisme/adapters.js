const filterObjectsByChildrenKey = (objects, assertingKey) => {
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
  return filterObjectsByChildrenKey(
    response,
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedResource"
  )[0][
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedResource"
  ][0]["@id"].replace("https://data.datatourisme.gouv.fr/", "");
};
const getPictureUrlFromSchemaPictureObject = schemaPic => {
  return filterObjectsByChildrenKey(
    schemaPic,
    "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locator"
  )[0];
};
const getSchemaGeoObjectFromSitesObject = response => {
  return filterObjectsByChildrenKey(response, "http://schema.org/geo")[0][
    "http://schema.org/geo"
  ][0]["@id"].replace("https://data.datatourisme.gouv.fr/", "");
};
const getLatLongFromSchemaGeoObject = schemaGeo => {
  return filterObjectsByChildrenKey(schemaGeo, "http://schema.org/latitude")[0];
};
export {
  getSchemaPictureObjectFromSitesObject,
  getPictureUrlFromSchemaPictureObject,
  filterObjectsByChildrenKey,
  getLatLongFromSchemaGeoObject,
  getSchemaGeoObjectFromSitesObject
};
