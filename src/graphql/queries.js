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

 export const getSinglePost = gql`query getSinglePost($id: ID! = "") {
    post(id: $id, idType: DATABASE_ID) {
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
  }`; 