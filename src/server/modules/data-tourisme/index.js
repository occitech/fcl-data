import typeDefs from "./schema.gql";
import loader from "./loader";
import resolvers from "./resolvers";
import makeDataTourismClient from "./clients/makeDataTourismClient";
import makeDiffuseurDataTourismClient from "./clients/makeDiffuseurDataTourismClient";

export default {
  namespace: "DataTourisme",
  context: loader(makeDiffuseurDataTourismClient, makeDataTourismClient),
  typeDefs,
  resolvers
};
