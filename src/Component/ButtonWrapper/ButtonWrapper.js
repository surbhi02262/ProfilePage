import React,{Component} from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    root:{
        padding:'7px',
    },
})

class ButtonWrapper extends Component{
    render(){
        const{children,onClick,classes} = this.props;
        return (
            <div className="button-container">
                <Button {...this.props} onClick={onClick} className={classes.root}>
                    {children}
                </Button>
            </div>
        )
    }
}
ButtonWrapper.defaultProps ={
    variant:"contained",
    color:'primary',
}
ButtonWrapper.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default withStyles(styles)(ButtonWrapper);