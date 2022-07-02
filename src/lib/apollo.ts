import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: `https://api-sa-east-1.graphcms.com/v2/cl53c2uje2rkd01t8gbyj3rnc/master`,
    cache: new InMemoryCache()
})