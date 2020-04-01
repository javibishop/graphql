import express from 'express';
import compression from 'compression';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';
import myschema from './schema/index'
import {ApolloServer} from 'apollo-server-express';
import { createServer } from 'http';

const port = 3000;

const app = express();
app.use('*', cors());
app.use(compression()); /*ver para que es */

const server = new ApolloServer({
    schema: myschema,
    introspection:true
});

server.applyMiddleware({app});
const httpServer = createServer(app);

httpServer.listen({port: port},() => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
 