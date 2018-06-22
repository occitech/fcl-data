import { graphql } from "react-apollo";

export default CartQuery =>
  graphql(CartQuery, {
    props: ({ data }) => ({
      cartTickets: !data.loading && data.cartTickets,
      loading: data.loading
    })
  });
