import { ADD_TODO } from "../constant";

import { REMOVE_DATA} from "../constant"
const initialState = {
    userData: [],
    FirebaseData: []
}  
  


export default function DATA(state = [], action) {
     console.log(action)
    switch (action.type) {
        case ADD_TODO:
      
            return ({
                ...state,
                userData: action.payload
            })
            case 'GETTODO':
                console.log("Add firebase reducer",action.payload)
                return ({
                    ...state,
                    FirebaseData: action.payload
                })
            case REMOVE_DATA:
            console.log("remove reducer", state)
            state.pop()
            return [
                ...state,

            ]
        default:
            return state
    }


}