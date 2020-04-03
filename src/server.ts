import express from 'express';
import compression from 'compression';
import cors from 'cors';
import myschema from './schema/index'
import {ApolloServer} from 'apollo-server-express';
import { createServer } from 'http';

import expressPlayGround from 'graphql-playground-middleware-express';
const port = 3000;

const app = express();
app.use('*', cors());
app.use(compression()); 

/*ver para que es */

const server = new ApolloServer({
    schema: myschema,
    introspection:true
});

server.applyMiddleware({app});

//configuro para que vaya al playground directo al entrar a la raiz.
app.get('/', expressPlayGround ({
    endpoint: '/graphql'
}));

const httpServer = createServer(app);

httpServer.listen({port: port},() => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
 