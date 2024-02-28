import { gql } from "@apollo/client";

export const getPosts = gql`query getPosts {
    posts {
      nodes {
        databaseId
        title
        excerpt
        content
        featuredImage {
          node {
            guid
          }
        }
      }
    }
  }`;