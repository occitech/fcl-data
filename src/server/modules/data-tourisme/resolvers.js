const dataTourisme = { madata: "infoUtiles" };

export default {
  Query: {
    datas: () => dataTourisme
  },

  DataTourisme: {
    sites: (_, __, context) => context.loadData().then(data => {})
  }
};
