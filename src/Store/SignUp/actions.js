import {SIGNUP_USER} from '../typeConstants';
import api from '../../Api/Api';

export const userSignUp = (user) =>{
    return (dispatch) =>{
        api.signUpUser(user).then(resp =>{
            dispatch({
                type:SIGNUP_USER,
                data: resp.data
            })
        })   
    }  
}