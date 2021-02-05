
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodos, getTodoFirebase } from "../store/actions"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Todo(props) {
    useEffect(() => {
        props.getTodoFirebase()



    }, [])
    const [todos, setTodo] = useState([])
    console.log('Home======>', props.data.data_from_firebase)

    
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

            <div class="header">
                <h1>TODO LIST </h1>
                <div  >
                    < TextField  type={'text'}  className="input_field"   id="filled-basic" label="Add your todo" variant="filled" value={todos} onChange={(e) => setTodo(e.target.value)} /> 
                    <Button onClick={submit} variant="outlined" color="primary" className="add_btn" > Add-Todo </ Button>
                </div>
            </div>
            <div>
                
<div className="todoList" >
                {props.data.data_from_firebase !== undefined ? props.data.data_from_firebase.map((todo, index) => {
                        console.log('todo=====>', todo.data)
                        return (
                            <div className='formView'>
                        <li key={index} >{todo.data}   <Button variant="contained" color="secondary" className='close ' onClick={() => { props.RemoveTodoHome() }}>remove Todo</Button> </li>
                                
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
    data: state.cardItems

})
const mapDispatchToProps = dispatch => ({
    AddTodosHome: data => dispatch(addTodo(data)),
    RemoveTodoHome: data => dispatch(removeTodos(data)),
    getTodoFirebase: () => dispatch(getTodoFirebase()),


})
export default connect(mapStateToProps, mapDispatchToProps)(Todo)