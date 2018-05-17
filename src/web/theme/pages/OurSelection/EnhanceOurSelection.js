import { graphql } from "react-apollo";
import compose from "recompose/compose";

export default OurSelectionQuery =>
  compose(
    graphql(OurSelectionQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => {
        console.log(data);
      }
    })
  );
