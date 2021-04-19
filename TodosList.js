import React from 'react';
import { connect } from "react-redux";

const TodosList =({todos})=>{
    return (
        <div className="todos">
            {todos.map((todo,i)=>(
                <h1 className="todo">{todo}</h1>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodosList); 
