// app/api/graph/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '@/graphql/schema'; // Your existing schema
import root from '@/graphql/resolvers';   // Your existing resolvers

// Create an Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs: schema, // Apollo Server expects typeDefs for schema definition
  resolvers: root,  // Your existing resolvers
});

// Start the server and create the Next.js API route handler
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (_req, _res) => {
    // You can add context here, e.g., database connections, authentication info
    // For now, our resolvers directly use petData
    return {};
  },
});

// Export the handlers for GET and POST requests
export { handler as GET, handler as POST };