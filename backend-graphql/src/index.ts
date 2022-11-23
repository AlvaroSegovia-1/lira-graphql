import express from 'express'
import cors from 'cors'
import {ApolloServer} from 'apollo-server-express'
import {schema} from './graphql'

async function init(){
    const app = express()
    app.use(cors())

const server = new ApolloServer({
    schema,
    //playground: true,
    introspection: true
    })

await server.start()

server.applyMiddleware({ app })

app.listen(5500, ()=>{
    console.log(`http://localhost:5500`)
})
}

init()
