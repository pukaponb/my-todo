import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';

class InputBox extends Component {
    render() {
        let {dataSource,floatingLabelText,name,style,onUpdateInput,onNewRequest,todo_task_item} = this.props;
        return (
            <AutoComplete name={name}
                          floatingLabelText={floatingLabelText}
                          style={style}
                          hintText={name}
                          searchText={todo_task_item}
                          dataSource={dataSource}
                          onUpdateInput={onUpdateInput}
                          onNewRequest={onNewRequest}
                          openOnFocus={true}/>
        )
    }
}

InputBox.propTypes = {};
InputBox.defaultProps = {};

export default InputBox;
