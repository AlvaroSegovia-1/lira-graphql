import express from 'express'
import cors from 'cors'
import {ApolloServer, gql} from 'apollo-server-express'
import {schema} from './graphql'
import MongoLib from './mongo'
import config from './config'

async function init(){
    const app = express()
    app.use(cors())

const server = new ApolloServer({
    schema,
    //playground: true,
    introspection: true,
    context: async ()=> new MongoLib().connect()
    })

await server.start()

server.applyMiddleware({ app })

app.listen(config.port, ()=>{
    console.log(`http://localhost:${config.port}/graphql`)
})
}

init()
