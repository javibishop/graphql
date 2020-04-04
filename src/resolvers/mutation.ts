import { IResolvers } from "graphql-tools";
import { database } from '../data/data.store';
import _ from 'lodash';

const mutation : IResolvers = {
    Mutation: {
        cursoNuevo(__: void, {curso}): any {
            const cursoNuevo = {
               id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time:curso.time,
                level:curso.level,
                logo:curso.logo,
                path:curso.path,
                teacher:curso.teacher,
                reviews: []
            }
            //validacion por titulo que no exista
            if(database.cursos.filter(cur =>{
                return curso.title === cur.title 
            }).length === 0){
                database.cursos.push(cursoNuevo);
                return cursoNuevo;
            }else{
                return {
                    id:"-1",
                    title: "El curso ya existe",
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
            
        },
        cursoEdicion(__: void, {curso}): any {
            const cursoExiste = _.findIndex(database.cursos, (cur) =>{
                return cur.id === curso.id;
            })
            //console.log(cursoExiste);
            if(cursoExiste > 1){
                const valoracion = database.cursos[cursoExiste].reviews;
                curso.reviews = valoracion; 
                database.cursos[cursoExiste] = curso;
                return curso;
            }else{
                return {
                    id:"-1",
                    title: "El curso no existe",
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
            console.log(cursoExiste);
        },
        cursoEliminar(__: void, {id}): any {
            const cursoExiste = _.findIndex(database.cursos, (cur) =>{
                return cur.id === id;
            })
            if(cursoExiste > 1){
                let result =_.remove(database.cursos, (cur) =>{
                    return cur.id === id;
                });
                return result[0];
            }else{
                return {
                    id:"-1",
                    title: "El curso no existe",
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
            console.log(cursoExiste);
        }
    }
    
};

export default mutation;