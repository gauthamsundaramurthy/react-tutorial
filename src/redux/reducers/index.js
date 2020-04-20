import {initialState} from './initialState'
import {SET_FILTER, ADD_TODO, TOGGLE_TODO} from '../actions/constants'

function toDoReducers (state = initialState, action) {
    switch(action.type) {
        case SET_FILTER : 
            return Object.assign({}, state, {filter: action.filter})
        case ADD_TODO: 
            return Object.assign({}, state, {todos: [...state.todos, {task: action.task, index: state.todos.length+1, status: 'SHOW_ALL'}]})
        case TOGGLE_TODO: 
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (action.index+1 == todo.index) {
                        return Object.assign({}, todo, {status: action.status})
                    } else {
                        return todo;
                    }
                })
            })
        default:  
            return state
    }
} 

export default toDoReducers