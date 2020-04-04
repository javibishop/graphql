import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from 'lodash';

//aca esta resolviendo la lista de cursos en el tipo Estudiante, de donde saca la data de cursos.
//TAMBIEN se pueden modificar las propiedades que quiera de cada tipo. Por ejemplo la prop path de cursos.

const type : IResolvers = {
        Estudiante: {
            courses: parent => {
                const cursosLista : Array<any> = [];
                parent.courses.map((curso:string) => {
                    cursosLista.push(_.filter(database.cursos, ['id', curso])[0]);
                })
                return cursosLista;
            }
        },
        Curso: {
            students: parent =>{
                const estudiantes : Array<any> = [];
                database.estudiantes.map((est) => {
                    est.courses.forEach((id) => {
                        if(id === parent.id){
                            estudiantes.push(est);
                        }
                    });
                });
                return estudiantes; 
            },
            path : parent => `https:\\www.udemy.com${parent.path}`
        }

    };

export default type;