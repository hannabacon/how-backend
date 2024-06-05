import "reflect-metadata"; 

import path from 'node:path';

import { ApolloServer } from "apollo-server";
import { UsersResolver } from "./resolvers/users-resolver";
import { buildSchema } from "type-graphql";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      UsersResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });



  const server = new ApolloServer({
    schema,
  });


  const { url } = await server.listen({ port: 4000 });


  console.log(`Server is running, GraphQL Playground available at ${url}`);


}


bootstrap();