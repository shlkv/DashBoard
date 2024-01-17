import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/clres6yaj2scg01w7jzb5fd3d/master',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    {
      statuses {
      id
      state
      },
      tasks {
        id
        state
        title
        description
        priority
      }
    }
    `,
  })
  // .then((result) => console.log(result));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>
);

// <Provider
// store={store}><Playground endpoint='https://7sgx4.sse.codesandbox.io/' />
// <App />
// </Provider>