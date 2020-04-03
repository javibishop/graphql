import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query : IResolvers = {
        Query: {
            estudiantes(): any {
                return database.estudiantes;
            },
            estudiante(__: void, {id}) : any{
                let result = database.estudiantes.filter(est => est.id === id)[0];
                if(!result){
                    return{
                        id: "-1",
                        name: `No se encontro el estudiante con id ${id}`,
                        email: '',
                        courses:[]
                    }
                }else{
                    return result;
                }
            },
            cursos(): any {
                return database.cursos;
            },
        }
    };

    export default query;