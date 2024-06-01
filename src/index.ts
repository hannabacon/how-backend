import { ApolloServer, gql } from 'apollo-server';
import * as dotenv from 'dotenv';

dotenv.config();

// Defina o schema GraphQL com o novo campo
const typeDefs = gql`
  type Query {
    hello: String
    publicKey: String
    goodbye: String
    saudacoes: String
  }
`;

// Defina os resolvers para os campos
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    publicKey: () => process.env.PUBLIC_API_KEY,
    goodbye: () => 'Goodbye!',
    saudacoes: () => 'Olá Giulia!',
  },
};

// Crie a instância do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Inicie o servidor
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
