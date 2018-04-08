import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Form from './components/form/Form';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: {
                name: this.props.name,
                project: this.props.project
            },
            dataSource: ["ant","boy","cat","Dog","van"],
            lists: []
        };
        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };
    }
    handleList = (lists) => {
        this.setState({
            lists: lists,
        });
    };
    handleRequestDelete = (key) => {
        this.items = this.state.lists;
        this.items = this.items.filter(e => e !== key);
        console.log("items : " + this.items );
        this.setState({
            lists: [...this.items]
        })
    };
    renderChip = (data,key) => {
        return (
            <Chip
                key={key}
                onRequestDelete={() => this.handleRequestDelete(data)}
                style={this.styles.chip} >
                <Avatar size={35}>{key+1}</Avatar>
                {data}
            </Chip>
        );
    };
    render() {
        let {lists,dataSource,value} = this.state;
        return (
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to {value.project}</h1>
                        <h2 className="App-title">I'm {value.name}</h2>
                    </header>
                    <content style={{height: '100%'}}>
                        <Form dataSource={dataSource} lists={lists} onUpdateList={this.handleList}/>
                        {/*<form onSubmit={this.handleFormSubmit}>
                            <AutoComplete name="todo_task"
                                          floatingLabelText="Add todos"
                                          style={sty}
                                          hintText="Type Todo task"
                                          searchText={todo_task_item}
                                          dataSource={dataSource}
                                          onUpdateInput={this.handleUpdateInput}
                                          onNewRequest={this.handleNewRequest}
                                          openOnFocus={true}
                            />
                            <RaisedButton label="Add" primary={true} style={sty} onClick={this.handleFormSubmit}/>
                        </form>*/}
                        <div style={this.styles.wrapper}>
                            {
                                lists.map(
                                    (item, i) => this.renderChip(item, i)
                                )
                            }
                        </div>
                    </content>
                </div>
            </MuiThemeProvider>
        );
    }
}
App.defaultProps = {
    name: 'Best Pukapon',
    project: 'todo React'
};

export default App;
