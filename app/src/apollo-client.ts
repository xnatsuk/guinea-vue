import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
})

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== 'production')
    logErrorMessages(error)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
  connectToDevTools: true,
})
