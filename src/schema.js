import {makeExecutableSchema} from "graphql-tools";
import {mergeTypes,mergeResolvers,fileLoader} from "merge-graphql-schemas"
import path from "path";

const allTypes = fileLoader(path.join(__dirname,"/api/**/*.graphql"));
const allResolves = fileLoader(path.join(__dirname,"/api/**/*.js"));
const schema = makeExecutableSchema({
    typeDefs : mergeTypes(allTypes),
    resolve : mergeResolvers(allResolves)
})

export default schema;