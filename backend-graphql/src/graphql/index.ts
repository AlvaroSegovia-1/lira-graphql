import {GraphQLSchema} from 'graphql'
//import {makeExecutableSchema} from 'graphql-tools'
import { makeExecutableSchema } from '@graphql-tools/schema'
import 'graphql-import-node' 
import rootSchema from './schemas/schema.graphql'

export const schema = makeExecutableSchema({ 
    typeDefs:[
        rootSchema
] })

/* export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        rootSchema
    ]
}) */