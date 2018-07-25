import { graphql } from "react-apollo";
import { compose } from "recompose";

export default OurDatabaseQuery =>
  compose(
    graphql(OurDatabaseQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => {
        return {
          sites: data.data ? data.data.sites : null,
          loading: data.loading
        };
      }
    })
  );
