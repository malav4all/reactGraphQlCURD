import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from}
 from '@apollo/client'

import {onError} from '@apollo/client/link/error' 
const errorLink = onError(({graphQLErrors,networkError  
})=>{
    if (graphQLErrors) {
        graphQLErrors.map(({message,locations,path})=>{
            alert(`Graphql Error ${message} locations ${locations} path ${path}`)
        })
    }
})
const link = from([
    errorLink,
    new HttpLink({uri:"http://localhost:4000/graphql"})
])
export const client  = new ApolloClient({
    cache:new InMemoryCache(),
    link: link
})

export {ApolloProvider}