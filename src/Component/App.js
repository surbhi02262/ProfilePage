import React from 'react';
import '../Styles/App.css';
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';
import WrapperContainer from './WrapperContainer/WrapperContainer'
import {Switch,Route} from 'react-router-dom';
import Login from './Login/Login';
import {Grid} from '@material-ui/core';

function App() {
  return (
    <Grid container> 
        <Grid item xs={12}> 
          <HeaderWrapper/> 
        </Grid>
        <Grid container item xs={12}>
          <WrapperContainer>
              <Switch>
                <Route exact path="/login" component={Login}/>
              </Switch>
          </WrapperContainer>
        </Grid>          
    </Grid>
  );
}

export default App;
