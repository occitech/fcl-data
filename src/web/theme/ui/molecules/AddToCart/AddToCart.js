import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import Button from "theme/ui/atoms/Button";
import AddToCartMutation from "./AddToCartMutation.gql";

const AddToCart = ({ children, sku, onAdded, site }) => {
  const variables = {
    ticket: {
      id: site.product.id,
      name: site.product.name
    }
  };
  return (
    <Mutation mutation={AddToCartMutation} onCompleted={onAdded}>
      {(addTicketToCart, { loading }) => (
        <Button
          onClick={e => {
            e.preventDefault();
            addTicketToCart({ variables: variables });
          }}
          status={loading ? "loading" : ""}
        >
          {children}
        </Button>
      )}
    </Mutation>
  );
};

AddToCart.propTypes = {
  children: PropTypes.node.isRequired,
  sku: PropTypes.string,
  onAdded: PropTypes.func
};

export default AddToCart;
