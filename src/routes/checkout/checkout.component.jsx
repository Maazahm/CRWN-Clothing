import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="checkout-block">Product</span>
        <span className="checkout-block">Description</span>
        <span className="checkout-block">Quantity</span>
        <span className="checkout-block">Price</span>
        <span className="checkout-block">Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        //     <h2>{name}</h2>
        //     <span>{quantity}</span>
        //     <br />
        //     <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
        //     <br />
        //     <span onClick={() => addItemToCart(cartItem)}>increment</span>
        // </div>
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
