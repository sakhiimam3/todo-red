import { ADD_TO_TODO ,REMOVE_TO_CART} from '../constants'
import firebase from "../../config/firebase";
const initialState = {
    usersdata: [],
    data_from_firebase: []
}  
  

export default function cardItems(state = [], action) {
    console.log("action",action.data)
    switch (action.type) {
        case ADD_TO_TODO:
            return ({
                ...state,
                usersdata: action.payload
            })
            case 'GETTODO':
                console.log("Add firebase reducer",action.payload)
                return ({
                    ...state,
                    data_from_firebase: action.payload
                })
            case REMOVE_TO_CART:
            
              firebase.database().ref("todos/" + action.id).remove()
        
           
            // return [
            //     ...state,


            // ]
        default:
            return state
    }


}
