import React,{Component} from 'react';
import {Grid} from '@material-ui/core';

class WrapperContainer extends Component{
    render(){
        const{children} = this.props;
        return (
            <Grid container>             
                    {children}
            </Grid>
        )
    }
}
export default WrapperContainer