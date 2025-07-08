// app/api/graph/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '@/graphql/schema'; 
import resolver from '@/graphql/resolvers';   


const apolloServer = new ApolloServer({
  typeDefs: schema, 
  resolvers: resolver, 
});



const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (_req, _res) => {
    
    return {};
  },
});

// Export the handlers for GET and POST requests
export { 
    handler as GET, 
    handler as POST 
};