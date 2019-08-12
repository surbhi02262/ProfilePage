import React,{Component} from 'react';
import {Card,CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    card: {
        color: '#3F51B5',
        // textAlign: 'center',
        padding: '4px',
        margin:'10px',
    },
}
class CardWrapper extends Component{
    render(){
        const{children,classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        )
    }
}
export default withStyles(styles)(CardWrapper);