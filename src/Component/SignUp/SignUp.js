import React, { Component } from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import InputFieldWrapper from '../InputFieldWrapper/InputFieldWrapper';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import {Grid} from '@material-ui/core';
import RadioButtonWrapper from '../RadioButtonWrapper/RadioButtonWrapper';
import DatePickerWrapper from '../DatePickerWrapper/DatePickerWrapper';
import {connect} from 'react-redux';
import {userSignUp} from '../../Store/SignUp/actions';
import {Redirect} from 'react-router-dom';

const radioOptions =[
    {value:"female",label:"Female"},
    {value:"male",label:"Male"},
    {value:"other",label:"Other"},
  ]

class SignUp extends Component {
    state={
       user:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        contactNo:"",
        gender:"",
        dob:"",
       }
    }
    handleInputChange =(name,value) =>{
        let newUser = this.state.user;
        newUser[name]= value;
        this.setState({user:newUser})
    }
    handleSignUp = () =>{
        console.log('sign',this.state.user);
        this.props.userSignUp(this.state.user)
    }
    render() {
        const{success}= this.props;
        if(success){
         return <Redirect to="/" />
        }
        return (
        <>
            <Grid item md={4}></Grid>
            <Grid item md={4} className="center-signup-container">
                <CardWrapper>
                    <div className="header-title">Sign Up</div>
                    <InputFieldWrapper name="firstName" label="FirstName" type="text" onChange={this.handleInputChange}/>
                    <InputFieldWrapper name="lastName" label="LastName" type="text" onChange={this.handleInputChange}/>
                    <InputFieldWrapper name="email" label="Email" type="text" onChange={this.handleInputChange}/>
                    <InputFieldWrapper name="password" label="Password" type="password" onChange={this.handleInputChange}/>
                    <RadioButtonWrapper name="gender" title="Gender" radioOptions={radioOptions} onChange={this.handleInputChange}/>
                    <InputFieldWrapper name="contactNo" label="Contact No." type="number" onChange={this.handleInputChange}/>
                    <DatePickerWrapper name="dob" label="Date Of Birth" onChange={this.handleInputChange}/>
                    <ButtonWrapper onClick={this.handleSignUp}>Sign Up</ButtonWrapper>
                </CardWrapper>
            </Grid>
        </> 
        );
    }
}

const mapStateToProps = (state) => ({
    success: state.SignUp.isSuccess
})

const mapDispatchToProps = {
    userSignUp
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);