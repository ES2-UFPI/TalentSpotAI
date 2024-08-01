import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      user {
        id
        nome
        email
      }
    }
  }
`;

export default LOGIN_MUTATION;
