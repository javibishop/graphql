import { IResolvers } from "graphql-tools";
import query from "./query";

const resolvers : IResolvers = {
    // esto viene de query.ts
        ...query
    };

    export default resolvers;