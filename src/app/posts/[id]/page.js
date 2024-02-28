import CreateApolloClient from "@/apollo/client";
import { getSinglePost } from "@/graphql/queries";

export default async function SinglePost({params})
{
    const client = CreateApolloClient();
    const data = await client.query({query : getSinglePost , variables : { id: params.id}});
    const post = data?.data?.post;
    return(<>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
    <img src={post?.featuredImage?.node?.guid}/>
    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>);
}