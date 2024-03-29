import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage'

const URI = 'http://10.0.0.244:4000/';


const httpLink = createHttpLink({
  uri: URI
});

const authLink = setContext(() => {
  // get the authentication token from local storage if it exists
  const token = AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return { token }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
