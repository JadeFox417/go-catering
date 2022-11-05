import { gql } from "@apollo/client";

export const UpdateMenuTrue = gql`
  mutation UpdateMenuTrue($id: Int!) {
    update_menu(where: { id: { _eq: $id } }, _set: { inCart: true }) {
      returning {
        id
        image
        name
        description
        inCart
        price
      }
    }
  }
`;

export const UpdateMenuFalse = gql`
  mutation UpdateMenuFalse($id: Int!) {
    update_menu(where: { id: { _eq: $id } }, _set: { inCart: false }) {
      returning {
        id
        image
        name
        description
        inCart
        price
      }
    }
  }
`;
