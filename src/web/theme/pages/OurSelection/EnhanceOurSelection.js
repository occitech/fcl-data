import { graphql } from "react-apollo";
import { compose, withState } from "recompose";

export default OurSelectionQuery =>
  compose(
    withState("ourSelectionTranslate", "setOurSelectionTranslate", 0),
    graphql(OurSelectionQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data }) => {
        return {
          sites: data.datas ? data.datas.sites.slice(200, 210) : "loading",
          loading: data.loading
        };
      }
    })
  );
