import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    // aca se pone con que se trabaja.
        Query: {
            hola(): string{
                return 'Hola Mundo';
            },
            holaConNombre(__: void, {
                nombre
            }): string{
                return `Hola Mundo ${nombre}`;
            },
            holaAlCurso(): string{
                return 'Hola Mundo cursograpql';
            }
        }
    };

    export default query;