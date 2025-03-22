import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "1", text: "todo1", }],

};
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        editTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }

    }

})


 export const {addTodo, removeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer