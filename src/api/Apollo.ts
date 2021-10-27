import { ApolloClient, InMemoryCache } from '@apollo/client';

const aplloClient = new ApolloClient({
  uri: 'https://graphql-collection.herokuapp.com/',
  cache: new InMemoryCache(),
});

export { aplloClient };
