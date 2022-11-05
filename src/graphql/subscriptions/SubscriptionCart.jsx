import { gql } from "@apollo/client";

export const SubscriptionCart = gql`
  subscription SubscriptionCart {
    cart(order_by: { id: asc }) {
      id
      quantity
      menu {
        id
        name
        description
        price
        image
      }
    }
  }
`;
