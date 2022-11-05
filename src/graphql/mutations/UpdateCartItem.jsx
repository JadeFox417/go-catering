import { gql } from "@apollo/client";

export const UpdateCartItem = gql`
  mutation UpdateCartItem($id: Int!, $quantity: Int!, $totalPrice: Int!) {
    update_cart(where: { id: { _eq: $id } }, _set: { quantity: $quantity, totalPrice: $totalPrice }) {
      returning {
        id
        menu_id
        quantity
        totalPrice
      }
    }
  }
`;
