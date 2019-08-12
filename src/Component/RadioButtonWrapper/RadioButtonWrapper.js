import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const styles = theme => ({
    root: {
    },
    formControl: {
      margin: '15px 0px 0px 0px',
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
      display: 'inline-block',
    },
  });

  
class RadioButtonWrapper extends Component {
    state={
        value:""
    }
    handleChange = (e) =>{
        this.setState({value:e.target.value},function(){
            this.props.onChange(this.props.name,this.state.value)
        })
    }
    render() {
        const{classes,title,radioOptions}= this.props;
        return (
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup
              aria-label={title}
              name={title}
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
            {radioOptions.map(option =>{
                return <FormControlLabel value={option.value} control={<Radio/>} label={option.label}/>
            })}
            </RadioGroup>
          </FormControl>
        );
    }
}

export default withStyles(styles)(RadioButtonWrapper);

