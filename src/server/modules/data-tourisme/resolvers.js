const dataTourisme = { madata: "infoUtiles" };

export default {
  Query: {
    data: () => dataTourisme
  },

  DataTourisme: {
    sites: (_, __, context) => context.loadData().then(data => {})
  }
};
