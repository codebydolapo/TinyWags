import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import "reflect-metadata";


const server = new ApolloServer({})

export const config = {
  api: { bodyParser: false } // Disable body parsing to allow Apollo Server to handle the request
}

const startServer = server.start();

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
  await startServer;
  return server.createHandler({ path: "/api/graph" })(req, res);
}