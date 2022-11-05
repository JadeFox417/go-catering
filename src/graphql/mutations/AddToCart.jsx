import { gql } from "@apollo/client";

export const AddToCart = gql`
  mutation AddToCart($menu_id: Int!, $totalPrice: Int!) {
    insert_cart_one(object: { menu_id: $menu_id, totalPrice: $totalPrice }) {
      id
      menu_id
      quantity
      totalPrice
      menu {
        price
      }
    }
  }
`;
