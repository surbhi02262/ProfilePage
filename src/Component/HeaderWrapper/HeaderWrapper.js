import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {handleLogout} from '../../Store/Auth/actions';
import {Link} from 'react-router-dom';

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
        this.props.history.push('/');
    }
    handleSignUp = () =>{
        this.props.history.push('/signUp');
    }
    render() {
        const{classes,appName,headerTitle,isAuth} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">{appName} </Link> | {headerTitle}
                        </Typography>
                       {isAuth 
                       ? 
                       <Button onClick={this.props.handleLogout} className={classes.setColor}>Logout</Button>
                       : <><Button onClick={this.handleLogin} className={classes.setColor}>Login</Button>
                        <Button onClick={this.handleSignUp} className={classes.setColor}>SignUp</Button></>
                       }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appName : state.Header.appName,
    headerTitle: state.Header.headerTitle,
    isAuth :state.Login.isAuthenticated
})
const mapDispatchToProps ={
    handleLogout
}
export default withRouter(withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(HeaderWrapper)))