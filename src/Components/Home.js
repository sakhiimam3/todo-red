import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodos, getTodoFirebase } from '../store/actions'

function Home(props) {
    useEffect(() => {
        props.getTodoFirebase()



    }, [])
    const [todos, setTodo] = useState([])
    console.log('Home======>', props.data.FirebaseData)

    
    const submit = () => {
        if (setTodo === '') {
            alert('Enter your Todo')
        } else {
            props.AddTodosHome(todos)
            setTodo('')
        }

    }

    return (
        <div>

            <div id="myDIV" class="header">
                <h2>My To Do List</h2>

                <div >
                    <h1>Todo</h1>
                    <input type={'text'} id="myInput" placeholder="Title..." value={todos} onChange={(e) => setTodo(e.target.value)} />
                    <span onClick={submit} class="addBtn">Add</span>
                </div>
            </div>
            <div>
                
<div id="myUL">
                {props.data.FirebaseData !== undefined ? props.data.FirebaseData.map((todo, index) => {
                        console.log('todo=====>', todo.data)
                        return (
                            <div className='formView'>
                        <li key={index} >{todo.data}   <button className='close ' onClick={() => { props.RemoveTodoHome() }}>remove Todo</button> </li>
                                
                            </div>
                        )
                    }) :null
                }
             
            
</div>
                
           
        </div>
</div>
    )
}
const mapStateToProps = state => ({
    data: state.DATA

})
const mapDispatchToProps = dispatch => ({
    AddTodosHome: data => dispatch(addTodo(data)),
    RemoveTodoHome: data => dispatch(removeTodos(data)),
    getTodoFirebase: () => dispatch(getTodoFirebase()),


})
export default connect(mapStateToProps, mapDispatchToProps)(Home)


































































// import React from 'react'

// import { connect } from "react-redux"
// import { Add_todo } from "../store/actions"
// const TODO = (props) => {
               
// }



// const mapStateToProps = (state) => ({
//     user: state.user
// })


// const mapDispatchToProps = (dispatch) => ({
//     Add_todo: () => dispatch(Add_todo())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TODO);