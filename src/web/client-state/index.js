import defaults from "./defaults";
import resolvers from "./resolvers";

const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    cartTickets: [CartTicket]
  }
  type Mutation {
    addTicketToCart(ticket: CartTicket!): CartTicket
    removeTicketFromCart: CartTicket

  type CartTicket {
    name: String!
    id: ID!
  }
  `
];

export default {
  defaults,
  resolvers,
  typeDefs
};
