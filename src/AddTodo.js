import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './redux/action/TodoActionCreator'

class  AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.myInput.current.value);
    }
    render() {
        return(
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                    <input type="text" className="form-control" ref={this.myInput}/>
                    <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default connect (null, {addTodo})(AddTodo)