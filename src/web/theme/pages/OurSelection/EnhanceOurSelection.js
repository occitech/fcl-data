import { graphql } from "react-apollo";
import { compose, withState } from "recompose";

export default OurSelectionQuery =>
  compose(
    withState("ourSelectionTranslate", "setOurSelectionTranslate", 0),
    graphql(OurSelectionQuery, {
      options: props => ({
        variables: {}
      }),
      props: ({ data, ownProps }) => {
        return {
          sites:
            data.data && ownProps.randomSitesIndex
              ? data.data.sites
                  .filter(site => site.description && site.hasRepresentation)
                  .slice(200, 210)
              : "loading",
          loading: data.loading
        };
      }
    })
  );
