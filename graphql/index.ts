import {GraphQLSchema} from "graphql";
import RootSchema from "./schema";
import mutations from "./mutation";

const Root = new GraphQLSchema({
    query: RootSchema,
    mutation : mutations
});

export default Root;