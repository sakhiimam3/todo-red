import { ADD_TO_TODO, REMOVE_TO_CART } from '../constants'
import firebase from "../../config/firebase";
export const addTodo = (data) => {
    console.warn("Add action", data)
    let obj = {
        data: data,
        id:Math.random()
    }
    return (dispatch) => {
        firebase.database().ref('todos/').push(obj).then((data) => {
            console.log('set in firebase from action', data)
        })
        dispatch({ type: ADD_TO_TODO, payload: obj })

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
        type: REMOVE_TO_CART,
    }
}