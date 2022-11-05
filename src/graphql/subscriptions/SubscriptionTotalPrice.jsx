import { gql } from "@apollo/client";

export const SubscriptionTotalPrice = gql`
  subscription SubscriptionTotalPrice {
    cart_aggregate {
      aggregate {
        count
        sum {
          quantity
          totalPrice
        }
      }
    }
  }
`;
