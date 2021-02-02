import { ADD_TODO, REMOVE_DATA } from '../constant'
import firebase from "../../config/firebase";
export const addTodo = (data) => {
    console.log("Add action", data)
    let obj = {
        data: data
    }
    return (dispatch) => {
        firebase.database().ref('todos/').push(obj).then(() => {
            console.log('set in firebase from action', obj)
        })
        dispatch({ type: ADD_TODO, payload: obj })
   

    }
}
export const getTodoFirebase = () => {
    let datas = []
    firebase.database().ref('todos/').on('child_added', function (data) {
        datas.push(data.val());

    })
    console.log('Firebase data from asction', datas)

    return (dispatch) => { dispatch({ type: 'GETTODO', payload: datas }) }

   

}

export const removeTodos = (data) => {
    console.log("Remove action", data)
    return {
        type: REMOVE_DATA,
    }
}