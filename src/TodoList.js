import React from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render() {

        console.log('TodoList::render ', this.props.todos)
        return(
            <div className="lists">
                {
                    this.props.todos.map((value, index) => (
                        <ListItem {...value} key={index}/>
                    ))     
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)