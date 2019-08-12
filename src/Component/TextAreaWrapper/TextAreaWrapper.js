import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {setClearPostField} from '../../Store/Post/actions';

const styles = theme=>  ({
    notchedOutline:{
            borderRadius:'0px',
    },
    textField: {
      marginBottom: '0px',
      width:'100%',
      borderRadius:'0px',

    },
})
class TextAreaWrapper extends Component {
    state={
        val: ''
    }
    componentDidUpdate(prevProps){
        console.log('xyxyx prevProps',prevProps);
        console.log('xyxyx this.props',this.props);
      if(this.props.isClear){
          this.setState({val:''})
          this.props.setClearPostField(false);
      }  
    }
   
    handleChange = (e) =>{
        this.setState({val: e.target.value},function(){
            this.props.onChange(this.props.name,this.state.val);
        })
    }
    render() {
        const{classes,name, value} = this.props;
        const{val}= this.state;
        console.log('inside render this.props',this.props)
        console.log('inside render state',this.state)
            let defaultVal = val === "" ? value : val
        return (
                <TextField
                    id="outlined-multiline-static"
                    label="Posts"
                    multiline
                    rows="4"
                    name={name}
                    defaultValue={defaultVal}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange= {(e) => this.handleChange(e)}
                />
        );
    }
}
const mapDispatchToProps= {
    setClearPostField
}
const mapStateToProps = (state) =>({
    isClear : state.Post.clearPostField,
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(TextAreaWrapper));