import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'
import { createApolloProvider } from '@vue/apollo-option'

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
  fetch: (uri: RequestInfo, options: RequestInit) => {
    return fetch(uri, options)
  },
})

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== 'production')
    logErrorMessages(error)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Pet: {
        keyFields: ['name'],
      },
    },
  }),
  link: errorLink.concat(httpLink),
  connectToDevTools: true,
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-first',
    },
  },

})
