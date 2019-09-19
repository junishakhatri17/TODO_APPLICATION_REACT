import React from 'react';
import {connect} from 'react-redux';
import {delTodo, toggleTodo} from './redux/action/TodoActionCreator';


class ListItem extends React.Component {
    removeListItem() {
         this.props.delTodo(this.props.id);
    }
    toggleList() {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        const completed = this.props.completed;
        console.log("ListItem::props ", this.props);
        return(
           <ul>
               <li>
                   <span className={completed? 'todo-item selected': 'todo-item'} onClick= {() => this.toggleList()}>{this.props.text}</span>
                    <button type="button" className="close" aria-label="Close" onClick= {()=> this.removeListItem()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </li> 
           </ul>
        );
    }
}

export default connect (null, {delTodo, toggleTodo})(ListItem)