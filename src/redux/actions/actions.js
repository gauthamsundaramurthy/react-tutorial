import {SET_FILTER, ADD_TODO, TOGGLE_TODO} from './constants'

export function setFilter (filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function addTodo (task) {
    return {
        type: ADD_TODO,
        task
    }
}

export function toggleTodo (index, status) {
    return {
        type: TOGGLE_TODO,
        index,
        status
    }
}