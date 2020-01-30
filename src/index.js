require("dotenv").config();

import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";

const port = process.env.PORT || 4000;
const typeDefs = `
    type Query{
        hello:String!
    }
`

const resolvers = {
    Query:{
        hello :() =>"hello"
    }
}
const server = new GraphQLServer({typeDefs,resolvers})
server.express.use(logger("dev"))
server.start({port},()=>{
    console.log(`Server running AT:${port}`)
})