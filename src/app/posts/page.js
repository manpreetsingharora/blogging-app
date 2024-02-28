import CreateApolloClient from "@/apollo/client";
import { getPosts } from "@/graphql/queries";
import Link from "next/link";

export default async function Home()
{

  const client = CreateApolloClient();
  const data = await client.query({query:getPosts});
  const posts = data.data.posts.nodes;

  return(<>
  <h1>this is the post archive page</h1>
  <br/>
  {posts.map((post , index) => {return(
   <div key={index}>
    <img src={post?.featuredImage?.node?.guid}/>
    <h3>{post.title}</h3>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
    <Link href={`/posts/${post.databaseId}`}>Read More</Link>
    <br/><br/>
   </div>
  )})}
  </>);
}