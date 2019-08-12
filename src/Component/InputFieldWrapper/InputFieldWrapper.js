import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import clx from 'classnames';

const styles ={
    textCls:{
        margin:'4px',
        flexGrow: 1,
    },
    flex:{
        display: 'flex'
    },
}
class InputFieldWrapper extends Component {
    state={
        value:"",
    }
    handleChange = (e) =>{
        this.setState({value:e.target.value},function(){
            this.props.onChange(this.props.name,this.state.value)
        })
    }
    render(){
        const{name,label,classes,type,inputClasses} = this.props;
        return (
            <div className={clx(classes.flex,inputClasses)}>
            <TextField
                id="standard-name"
                label={label}
                type={type}
                name={name}
                className={classes.textCls}
                value={this.state.value}
                onChange={(e) => this.handleChange(e)}
                margin="normal"
        />
        </div>
        )
    }
}
export default withStyles(styles)(InputFieldWrapper);