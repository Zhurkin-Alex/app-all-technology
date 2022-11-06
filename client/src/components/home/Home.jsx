import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addTodo, decrement, increment, removeLastTodo } from '../../redux/mainReducer';

function Home(props) {
    const count = useSelector(state => state.main.count)
    const todos = useSelector(state => state.main.todos)
    console.log('todos', todos)
    const dispatch = useDispatch()
    

    return (
        <>
            <div className="container">
                <h1>Счетчик{count}</h1>
                <button onClick={()=>{dispatch(increment())}}>increment</button>
                <button onClick={()=>{dispatch(decrement())}}>decrement</button>
                <button onClick={()=>{dispatch(removeLastTodo())}}>removeLastTodo</button>
                <button onClick={()=>{dispatch(addTodo(prompt()))}}>addTodo</button>

            </div>
            <ul>
                {todos.map( todo=>
                    <li key={todo}>{todo}</li>
                )}
            </ul>
        </>
    );
}

export default Home;