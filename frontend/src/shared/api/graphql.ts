import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://your-graphql-endpoint.com/graphql", // Замени на реальный GraphQL сервер
    cache: new InMemoryCache(),
});
