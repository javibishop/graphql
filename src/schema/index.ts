import { GraphQLSchema } from "graphql";
import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { makeExecutableSchema } from "graphql-tools";
import resolvers from '../resolvers/resolversMaps';


//definicion de schema gql
const myschema: GraphQLSchema = makeExecutableSchema ({
    typeDefs,
    resolvers
});

export default myschema;