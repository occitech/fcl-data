import { graphql } from "react-apollo";
import { compose, withState } from "recompose";

export default OurSelectionQuery =>
  compose(
    withState("ourSelectionTranslate", "setOurSelectionTranslate", 0),
    graphql(OurSelectionQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => {}
    })
  );
