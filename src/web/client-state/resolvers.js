import gql from "graphql-tag";

const CartTicketQuery = gql`
  query CartTickets {
    cartTickets @client {
      id
      name
    }
  }
`;

export default {
  Mutation: {
    addTicketToCart: (_, { ticket }, { cache, getCacheKey }) => {
      const previous = cache.readQuery({
        query: CartTicketQuery
      });

      const ticketData = {
        id: ticket.id,
        name: ticket.name,
        __typename: "cartTicket"
      };

      const data = { cartTickets: previous.cartTickets.concat([ticketData]) };

      cache.writeData({ data });
      return ticketData;
    },
    removeTicketFromCart: (_, { ticket }, { cache, getCacheKey }) => {
      const previous = cache.readQuery({
        query: CartTicketQuery
      });

      const data = {
        cartTickets: previous.cartTickets.filter(
          cartTicket => cartTicket.id !== ticket.id
        )
      };

      cache.writeData({ data });
      return null;
    }
  }
};
