import React,{Component} from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import InputFieldWrapper from '../InputFieldWrapper/InputFieldWrapper';
import {Grid} from '@material-ui/core';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import {connect} from 'react-redux';
import {validateLogin} from '../../Store/Auth/actions';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state={
        user:{
            email:'',
            password:'',
        }     
    }
    handleInputChange = (name,value) =>{
        let newUser = this.state.user;
        newUser[name] = value;      
        this.setState({user:newUser})
    }
    handleLoginSubmit= () => {
        console.log('s',this.state.user);
        this.props.validateLogin(this.state.user);
    }
    render(){
        const{children,isAuth,error} = this.props;
        if(isAuth){
            return <Redirect to="/"/>
        }
        return (
            <>
            <Grid  item md={4}></Grid>
            <Grid  item md={4} className="center-container">
                <CardWrapper>
                    <div className="header-title">Login Form</div>
                        {error.length > 0  &&  error  }
                    <InputFieldWrapper type="text" name="email" label="Email" onChange={this.handleInputChange}/>
                    <InputFieldWrapper type="password" name="password" label="Password" onChange={this.handleInputChange}/>
                    <ButtonWrapper color="default" onClick={this.handleLoginSubmit}>Login</ButtonWrapper>
                </CardWrapper>
            </Grid>
        </>
        )
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.Login.isAuthenticated,
    error:state.Login.errorMessage
})
const mapDisptachToProps = {
    validateLogin
}

export default connect(mapStateToProps,mapDisptachToProps)(Login);