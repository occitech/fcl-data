import typeDefs from "./schema.gql";
import loader from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "DataTourisme",
  context: loader,
  typeDefs,
  resolvers
};
