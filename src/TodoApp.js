import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class TodoApp extends React.Component {
  
    render() {
        return (
            <div>
                <span className="heading">MY TODO APPLICATION</span>
                <AddTodo />
                <TodoList />
            </div>
        );
    }

}