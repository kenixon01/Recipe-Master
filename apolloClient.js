import { ApolloClient, createHttpLink, InMemoryCache, } from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import AsyncStorage from '@react-native-async-storage/async-storage'

const networkInterface = createNetw

const httpLink = createHttpLink({
    uri: "http://localhost:5000/"
});

const authLink = setContext((_, {headers}) => {
    const token = AsyncStorage.getItem('token');
    return{
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;