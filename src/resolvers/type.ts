import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from 'lodash';

//aca esta resolviendo la lista de cursos en el tipo Estudiante, de donde saca la data de cursos.

const type : IResolvers = {
        Estudiante: {
            courses: parent => {
                const cursosLista : Array<any> = [];
                parent.courses.map((curso:string) => {
                    cursosLista.push(_.filter(database.cursos, ['id', curso])[0]);
                })
                return cursosLista;
            }
        }
    };

export default type;