// const initState = {
//     todos: []
// }

export const addTodo = (state = {todos: []},action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state;
    }
}

// export const addTodo = (state = [],action) =>{
//     switch(action.type){
//         case 'ADD_TODO':
//             return [...state, action.payload]
//         default:
//             return state;
//     }
// }