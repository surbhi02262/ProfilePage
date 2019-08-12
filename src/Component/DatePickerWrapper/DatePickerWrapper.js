import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      
      width: 200,
    },
  });

class DatePickerWrapper extends Component {
    state={
        value:""
    }
    handleChange = (e) =>{
        this.setState({value:e.target.value},function(){
            this.props.onChange(this.props.name,this.state.value)
        })
    }
    render() {
        const{classes,label,value} = this.props;
        return (       
            <TextField
                id="date"
                label={label}
                type="date"
                value={this.state.value}
                className={classes.textField}
                onChange={this.handleChange}
                InputLabelProps={{
                shrink: true,
            }}
        />   
        );
    }
}

export default withStyles(styles)(DatePickerWrapper);