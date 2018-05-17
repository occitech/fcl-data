import { graphql } from "react-apollo";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

const CATEGORY_ID = 56;

export default HomeQuery =>
  compose(
    withProps(props => ({
      categoryId: CATEGORY_ID
    })),
    graphql(HomeQuery, {
      options: props => ({
        variables: {
          id: props.categoryId
        }
      }),
      props: ({ data }) => ({
        category: data.category,
        loading: data.loading
      })
    })
  );
