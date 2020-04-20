import * as actions from "../actions/actions"
import TodoComponent from "../component/TodoComponent"
import {connect} from "react-redux";

function filterTodos (todosList=[], filter ) {
    switch(filter) {
        case "SHOW_INPROGRESS":
            return todosList.filter((todo) => todo.status === filter )
        case "SHOW_COMPLETED":
            return todosList.filter((todo) => todo.status === filter )
        case "SHOW_ALL":
        default: 
            return todosList
    }
}

const mapStateToProps = (state) => {
    return {
        filteredTodos: filterTodos(state.todos, state.filter),
        todos: state.todos,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        setFilter: (filter) => {
            dispatch(actions.setFilter(filter))
        },
        addTodo: (newTodo) => {
            dispatch(actions.addTodo(newTodo))
        },
        toggleTodo: (index, status) => {
            dispatch(actions.toggleTodo(index, status))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoComponent)

export default TodoContainer;
