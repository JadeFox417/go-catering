import { gql } from "@apollo/client";

export const DeleteCartItem = gql`
  mutation DeleteCartItem($id: Int!) {
    delete_cart(where: { id: { _eq: $id } }) {
      returning {
        id
        menu_id
        quantity
      }
    }
  }
`;
