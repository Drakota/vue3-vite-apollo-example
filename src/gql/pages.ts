import { gql } from "apollo-boost";

export const pagesQuery = gql`
  query pages {
    Page {
      users {
        id
        name
        about
      }
    }
  }
`;
