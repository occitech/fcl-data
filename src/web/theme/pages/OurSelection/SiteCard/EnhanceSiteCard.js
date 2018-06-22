import { graphql } from "react-apollo";
import { compose, withProps } from "recompose";

export default ({ SiteCardQuery }) =>
  compose(
    withProps(props => ({ id: props.site.id })),
    graphql(SiteCardQuery, {
      options: ({ id }) => ({
        variables: {
          id: id
        }
      }),
      props: ({ data }) => ({
        loading: data.loading,
        picture: (!data.loading && data.data && data.data.site.picture) || null
      })
    })
  );
