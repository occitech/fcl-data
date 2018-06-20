import typeDefs from "./schema.gql";
import loader from "./loader";
import resolvers from "./resolvers";
import MakeDataTourismClient from "./clients/MakeDataTourismClient";
import MakeDiffuseurDataTourismClient from "./clients/MakeDiffuseurDataTourismClient";

export default {
  namespace: "DataTourisme",
  context: loader(MakeDiffuseurDataTourismClient, MakeDataTourismClient),
  typeDefs,
  resolvers
};
