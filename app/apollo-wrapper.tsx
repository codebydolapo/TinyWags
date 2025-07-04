"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react'; // Explicitly import React

const client = new ApolloClient({
  uri: '/api/graphql', // Your local GraphQL API endpoint
  cache: new InMemoryCache(),
});

export function ApolloWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}