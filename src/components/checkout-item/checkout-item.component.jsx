import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  CheckoutItemName,
  CheckoutItemQuantity,
  CheckoutItemPrice,
  QuantityArrow,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemName> {name} </CheckoutItemName>
      <CheckoutItemQuantity>
        <QuantityArrow onClick={removeItemHandler}>&#10094;</QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={addItemHandler}>&#10095;</QuantityArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice className="price"> ${price} </CheckoutItemPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
