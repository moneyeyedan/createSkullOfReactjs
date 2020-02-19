import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import  ApolloClient  from './graphql/intex';

function ApolloGql(props){
    return(
        <ApolloProvider client = {ApolloClient}>
             {props.children}
        </ApolloProvider>
    )
}


export default ApolloGql;