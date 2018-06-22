import { graphql } from "react-apollo";

export default SiteQuery =>
  graphql(SiteQuery, {
    options: ({ id }) => ({
      variables: {
        id: id
      }
    }),
    props: ({ data }) => ({
      loading: data.loading,
      site: !data.loading && data.data.site
    })
  });
