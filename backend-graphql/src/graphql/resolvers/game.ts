//import {IResolvers} from '@graphql-tools/utils'

export const gameResolver = {
    Query: {
        gameHello(root: any){
            return "game works"
        },
    }
}