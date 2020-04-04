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
            curso(__: void, {id}) : any{ 
                let curso = database.cursos.filter(cur => cur.id === id)[0];
                if(curso === undefined){
                    return {
                        id:"-1",
                        title: "No se encontro le curso",
                        description: "",
                        logo: "",
                        path: "",
                        teacher: "",
                        reviews: [],
                        level: 'Novato',
                        clases: 0,
                        time: 0,
                        students: []
                    }
                }
                else{
                    return curso;
                }
            }
        }
    };

    export default query;