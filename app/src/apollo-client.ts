import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'

const httpLink = new HttpLink({
  uri: `${process.env.VITE_API_URL}/graphql`,
  fetch: (uri: RequestInfo, options: RequestInit) => {
    return fetch(uri, options)
  },
})

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== 'production')
    logErrorMessages(error)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
})
