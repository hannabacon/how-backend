import 'reflect-metadata';

import { ApolloServer } from "apollo-server";
import { UsersResolver } from "./resolvers/users-resolver";
import { RecipsResolver } from "./resolvers/recips-resolver";
import { buildSchema } from "type-graphql";

import path from 'path';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      UsersResolver,
      RecipsResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀 Essa bomba esta girando na porta ${url}`);
  });

}

bootstrap()