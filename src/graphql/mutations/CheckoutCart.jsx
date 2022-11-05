import { gql } from "@apollo/client";

export const CheckoutCart = gql`
  mutation CheckoutCart {
    delete_cart(where: {}) {
      affected_rows
      returning {
        id
        menu_id
        quantity
        totalPrice
      }
    }
  }
`;

export const UpdateAllMenu = gql`
  mutation UpdateAllMenu {
    update_menu(where: {}, _set: { inCart: false }) {
      returning {
        id
        image
        name
        description
        inCart
        price
      }
      affected_rows
    }
  }
`;
