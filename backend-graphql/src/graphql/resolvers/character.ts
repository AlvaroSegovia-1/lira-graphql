//import {IResolvers} from '@graphql-tools/utils'
import data from '../../data/data.json'

export const characterResolver = {
    Query: {
        getCharacters(){
            return data.characters
        },
        getCharacter(root: void, args: any){
            const [found] = data.characters.filter(ch => ch._id===args._id)
            return found          
        }

    },
    Character: {
        games(parent: any ){
            //console.log(parent)
            const gameList: Array<any> = []
            parent.games.map((gameId: string)=>
            gameList.push(...data.games.filter(game => game._id === gameId))
            )
            //console.log(gameList)
            return gameList
        }
    }
}

