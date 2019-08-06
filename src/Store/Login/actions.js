import {VALIDATE_LOGIN_USER,ERROR_MESSAGE} from '../typeConstants';
import api from '../../Api/Api';


export const validateLogin = (user) =>{
    return (dispatch) =>{
        api.validateLogin(user).then(resp =>{
            console.log('ac',resp.data.result);
            if(resp.data.success){
                localStorage.setItem('Authorization',JSON.stringify(resp.data.result.token));
                dispatch({
                    type:VALIDATE_LOGIN_USER,
                    user:resp.data.result.user[0],
                })
            }else{
                dispatch({
                    type:ERROR_MESSAGE,
                    error:resp.data.message,
                })
            }
           
        })
    }
}