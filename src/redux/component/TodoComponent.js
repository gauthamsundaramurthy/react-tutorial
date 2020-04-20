import React from 'react';

class TodoComponent extends React.Component {
    
    state = {
        newTask : ""
    }

    addTodo ()  {
        let task = this.state.newTask.trim();
        if (task) {
            this.props.addTodo(task)
        } else {
            alert('No task to add..')
        }
    }

    render() {
        return (
            <div>
                <select onChange={e => this.props.setFilter(e.target.value)}>
                    <option> SHOW_ALL </option>
                    <option> SHOW_COMPLETED </option>
                    <option> SHOW_INPROGRESS </option>
                </select>
                <div> 
                    <ul>
                        {this.props.todos.map((item, index) => <li key={index}> 
                            <span> {item.task} </span> 
                            <button onClick={() => this.props.toggleTodo(index, 'SHOW_INPROGRESS')}> In progress </button>
                            <button onClick={() => this.props.toggleTodo(index, 'SHOW_COMPLETED')}> Complete </button>
                        </li>)}
                    </ul>
                </div>
                <input type="text" onChange={e => this.setState({newTask: e.target.value})} /> 
                <button onClick={() => this.addTodo()}> Add ToDo </button>
                { this.props.filteredTodos ?  <ul> {this.props.filteredTodos.map((item, index) => <li key={index}> {item.task} </li>)} </ul> : null }
            </div>
        )
    }
}

export default TodoComponent;