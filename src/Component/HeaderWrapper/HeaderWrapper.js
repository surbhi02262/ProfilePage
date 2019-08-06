import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,Link} from '@material-ui/core';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
const styles = {
    root: {
      flexGrow: 1,
    },
    setColor:{
        color:'white',
    },
    title: {
      flexGrow: 1,
      '& a':{
        color:'white',

      },
    },
  };

class HeaderWrapper extends Component {
    handleLogin = () =>{
        this.props.history.push('/login');
    }
    render() {
        const{classes,appName,headerTitle} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">{appName}</Link> | {headerTitle}
                        </Typography>
                        <Button onClick={this.handleLogin} className={classes.setColor}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appName : state.Header.appName,
    headerTitle: state.Header.headerTitle
})
export default withRouter(withStyles(styles)(connect(mapStateToProps,null)(HeaderWrapper)))