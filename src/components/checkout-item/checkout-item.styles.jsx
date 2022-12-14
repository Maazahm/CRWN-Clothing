import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  @media screen and (max-width: 800px) {
    width: 20%;
    padding-right: 8px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
  margin-left: 16px;

  @media screen and (max-width: 800px) {
    margin-left: 12px;
  }
`;

export const CheckoutItemPrice = styled.span`
  width: 23%;

  @media screen {
    width: 12%;
  }
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 800px) {
    margin: 0 4px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding-left: 24px;
  }
`;
