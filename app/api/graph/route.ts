// app/api/graph/route.ts
import { ApolloServer, BaseContext } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import type { NextRequest, NextResponse } from 'next/server'; // Import types for req and res

import schema from '@/graphql/schema'; 
import resolvers from '@/graphql/resolvers'; // Renamed for clarity, 'resolver' is a bit generic



const apolloServer = new ApolloServer({ // Specify the context type to match the returned context object
  typeDefs: schema, 
  resolvers, 
});

const handler = startServerAndCreateNextHandler( 
  apolloServer, 
  {
    context: async (req, res) => {
      return {}; 
    },
  }
);

// Export the handlers for GET and POST requests
export { 
  handler as GET, 
  handler as POST 
};