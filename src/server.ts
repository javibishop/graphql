import express from 'express';
import compression from 'compression';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';
import myschema from './schema/index'
const port = 3000;

const app = express();
app.use('*', cors());
app.use(compression()); /*ver para que es */

//definicion de los queries que hacepta mi api gql
const  typeDefs = `
    // type Query {
    //     hola: String!
    //     holaConNombre(nombre: String!): String!
    //     holaAlCurso: String!
    // }
`;

//definicion resolver que le dan a cada queries que hacepta mi api gql
// const resolvers : IResolvers = {
// // aca se pone con que se trabaja.
//     Query: {
//         hola(): string{
//             return 'Hola Mundo';
//         },
//         holaConNombre(__: void, {
//             nombre
//         }): string{
//             return `Hola Mundo ${nombre}`;
//         },
//         holaAlCurso(): string{
//             return 'Hola Mundo cursograpql';
//         }
//     }
// };

//definicion de schema gql
// const myschema: GraphQLSchema = makeExecutableSchema ({
//     typeDefs,
//     resolvers
// });

//en la raiz/graphql va a estar la api de gql
app.use('/', graphQLHTTP({
    schema: myschema,
    graphiql: true
}));

app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
