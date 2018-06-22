const filterObjectsByChildrenKey = (objects, assertingKey) => {
  objects.filter(object => {
    let objectFound = false;
    Object.keys(object).forEach(key => {
      if (key === assertingKey) {
        objectFound = true;
      }
    });
    return objectFound;
  });
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
  filterObjectsByChildrenKey,
  getLatLongFromSchemaGeoObject,
  getSchemaGeoObjectFromSitesObject
};
