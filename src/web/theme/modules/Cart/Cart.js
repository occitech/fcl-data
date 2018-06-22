import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import withRouter from "react-router/withRouter";
import EnhanceCart from "./EnhanceCart";
import { Mutation } from "react-apollo";
import CartQuery from "./CartQuery.gql";
import {
  ModalHeader,
  ModalContent,
  ModalAction
} from "theme/ui/templates/Modal";
import Button from "theme/ui/atoms/Button";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import RemoveTicketMutation from "./RemoveTicketMutation.gql";
import { H2 } from "../../ui/atoms/Typography/Heading";

class Cart extends Component {
  constructor() {
    super();
    this.launchCheckout = this.launchCheckout.bind(this);
  }

  launchCheckout() {
    this.props.onRequestClose();
    this.props.history.push("/checkout");
  }

  render() {
    const { cartTickets, loading } = this.props;
    if (loading) {
      return (
        <Fragment>
          <ModalHeader>Mon Panier</ModalHeader>
          <ModalContent>
            <LoadingArea>Loading…</LoadingArea>
          </ModalContent>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <ModalHeader>Mon Panier</ModalHeader>
        <ModalContent>
          <div className="cart-ticket">
            <div className="cart-ticket__title">Ticket(s) :</div>
            {cartTickets.map(
              (cartTicket, index) =>
                cartTicket.name && (
                  <div key={index}>
                    <H2>{cartTicket.name}</H2>
                    <Mutation mutation={RemoveTicketMutation}>
                      {removeTicketFromCart => (
                        <Button
                          onClick={e => {
                            e.preventDefault();
                            removeTicketFromCart({
                              variables: {
                                ticket: {
                                  id: cartTicket.id,
                                  name: cartTicket.name
                                }
                              }
                            });
                          }}
                        >
                          Supprimer le ticket
                        </Button>
                      )}
                    </Mutation>
                  </div>
                )
            )}
          </div>
        </ModalContent>
        <ModalAction>
          <Button onClick={this.launchCheckout} type="full-size">
            Proceed to checkout
          </Button>
        </ModalAction>
      </Fragment>
    );
  }
}

export default compose(EnhanceCart(CartQuery), withRouter)(Cart);
