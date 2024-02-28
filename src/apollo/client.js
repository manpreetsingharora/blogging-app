import { ApolloClient , InMemoryCache } from "@apollo/client";

export default function CreateApolloClient()
{
    return new ApolloClient({
        uri : "https://manpreet.mridulandrohan.com/graphql",
        cache : new InMemoryCache(),
    });
}