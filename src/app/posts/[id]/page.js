// import CreateApolloClient from "@/apollo/client";
// import { getSinglePost } from "@/graphql/queries";

export default function SinglePost({params})
{
    // const client = CreateApolloClient();
    // const data = client.query({query : getSinglePost} , {variable : params.id = new ID});
    return(`This is single post page for post id ${params.id}`);
}