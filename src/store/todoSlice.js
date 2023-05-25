import {createSlice} from '@reduxjs/toolkit'
import {v1} from 'uuid'


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: v1(),
                text: action.payload.text,
                checked: false
            })
        },
        removeTodo(state, action) {
            state.todos =state.todos.filter(todo=>todo.id !== action.payload.id)
        },
        handleChecked(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id ===action.payload.id)
            toggledTodo.checked = !toggledTodo.checked
        }
    }
})

export const {addTodo, removeTodo, handleChecked} = todoSlice.actions;

export default todoSlice.reducer