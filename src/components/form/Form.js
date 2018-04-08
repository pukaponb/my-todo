import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputBox from "./InputBox";
import Button from "./Button";

const styMargin = {
    margin: 12
};

class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataSource: this.props.dataSource,
            lists: this.props.lists,
            todo_task_item: ""
        };
    }
    concatAndDeDuplicate = (...arrs) => [ ...new Set( [].concat(...arrs) ) ];
    handleUpdateInput = (value) => {
        if (!!value) {
            this.setState({
                dataSource: this.concatAndDeDuplicate(...this.state.dataSource,value),
                todo_task_item: value
            });
        }
    };
    handleNewRequest = () => {
        if (!!this.state.todo_task_item) {
            this.props.onUpdateList(this.concatAndDeDuplicate(...this.state.lists,this.state.todo_task_item))
            this.setState({
                lists: this.concatAndDeDuplicate(...this.state.lists,this.state.todo_task_item),
                todo_task_item: ""
            });
        }
    };
    handleFormSubmit = (event) => {
        if (!!this.state.todo_task_item) {
            this.props.onUpdateList(this.concatAndDeDuplicate(...this.state.lists,this.state.todo_task_item))
            this.setState({
                lists: this.concatAndDeDuplicate(...this.state.lists,this.state.todo_task_item),
                todo_task_item: ""
            });
        }
        event.preventDefault();
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.lists != this.state.lists) {
            this.setState({
                lists:nextProps.lists
            });
        }
        return nextState
    }
    render() {
        let {dataSource,todo_task_item} = this.state;
        return (
            <form onSubmit={this.handleFormSubmit} >
                <InputBox name="todo_task" floatingLabelText="Add todo task" dataSource={dataSource} style={styMargin}
                          onUpdateInput={this.handleUpdateInput}
                          onNewRequest={this.handleNewRequest}
                          todo_task_item={todo_task_item}/>
                <Button style={styMargin}
                        onClick={this.handleFormSubmit}/>
            </form>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
