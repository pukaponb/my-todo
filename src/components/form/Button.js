import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton'

class Button extends Component {
    render() {
        let {style,onClick} = this.props;
        return (
            <RaisedButton label="Add" primary={true} style={style} onClick={onClick}/>
        );
    }
}

Button.propTypes = {};
Button.defaultProps = {};

export default Button;

