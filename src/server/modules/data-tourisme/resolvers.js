const dataTourisme = { madata: "infoUtiles" };

export default {
  Query: {
    data: () => dataTourisme
  },

  DataTourisme: {
    sites: (_, __, context) =>
      context.loadData().then(sites => {
        return (
          sites &&
          sites.filter(site => site["dc:identifier"]).map(site => ({
            id: site["dc:identifier"] ? site["dc:identifier"] : -1,
            name: site["rdfs:label"] ? site["rdfs:label"]["@value"] : null,
            description: site["rdfs:comment"]
              ? site["rdfs:comment"]["@value"]
              : null,
            type: site["@type"] ? site["@type"] : null
          }))
        );
      })
  }
};
