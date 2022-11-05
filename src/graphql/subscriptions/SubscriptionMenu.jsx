import { gql } from "@apollo/client";

export const SubscriptionMenu = gql`
  subscription SubscriptionMenu {
    menu(order_by: { id: asc }) {
      id
      image
      name
      description
      inCart
      price
    }
  }
`;
