import { ApolloClient } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL
})