import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/action/addTodo_action';

class InputField extends Component {
    constructor(props){
        super(props);
        this.state ={
            todo: '',
        }
    }
    handleChange = e => this.setState({todo: e.target.value});
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} type="text" name="todo" placeholder="Enter your name ..."/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});

export default connect(null,mapDispatchToProps)(InputField);
