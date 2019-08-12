import React, { Component } from 'react';
import '../Styles/App.css';
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';
import WrapperContainer from './WrapperContainer/WrapperContainer'
import {Switch,Route} from 'react-router-dom';
import Login from './Login/Login';
import {Grid} from '@material-ui/core';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import FriendProfile from './FriendProfile/FriendProfile';
import {connect} from 'react-redux';
import {getUserInfo} from '../Store/Auth/actions'
import Spinner from './Spinner/Spinner'
class App extends Component {
  
  componentDidMount () {
    this.props.getUserInfo()
  }
  render(){
    const{isLoggedIn, loading} = this.props
    return (
      <>
     {loading ? <Spinner />
     : <Grid container> 
        <Grid item xs={12} className="header-container"> 
          <HeaderWrapper/> 
        </Grid>     
        <Grid container item xs={12} className="body-container">
       {!isLoggedIn 
        ?  
          <Grid container item xs={12}>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/signUp" component={SignUp}/>
            </Switch>
          </Grid> 
        :  
        <Grid container item xs={12}>  
            <Grid item md={12} className="right-side">
                <WrapperContainer>
                    <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/friends/:id" component={FriendProfile}/>
                    </Switch>
                </WrapperContainer>
            </Grid>
          </Grid>
        }
        </Grid>        
    </Grid>}
    </>
  );
}
}
const mapStateToProps = (state) =>({
  isLoggedIn:state.Login.isAuthenticated,
  loading: state.Header.loading
})
const mapDispatchToProps = {
  getUserInfo
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
