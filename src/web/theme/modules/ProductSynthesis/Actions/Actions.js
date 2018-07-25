import React from "react";
import AddToCart from "theme/ui/molecules/AddToCart";
import { CartModal } from "../../Cart";

const Actions = site => {
  return (
    <div className="product-actions">
      <CartModal>
        {openCart => (
          <AddToCart site={site} sku={site.name} onAdded={openCart}>
            Add visit to the cart
          </AddToCart>
        )}
      </CartModal>
    </div>
  );
};

export default Actions;
