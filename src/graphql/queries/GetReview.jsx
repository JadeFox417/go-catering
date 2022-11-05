import { gql } from "@apollo/client";

export const GetReview = gql`
  query GetReview {
    review(order_by: { id: asc }) {
      id
      image
      name
      rating
      comment
    }
  }
`;
