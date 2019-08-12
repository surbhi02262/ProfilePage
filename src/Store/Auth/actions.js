import {VALIDATE_LOGIN_USER,ERROR_MESSAGE,SET_LOGOUT,INVALID_USER, LOADING} from '../typeConstants';
import api from '../../Api/Api';

export const getUserInfo = () =>  {
    return (dispatch) => {
        dispatch({
            type:LOADING,
            status:true,
        })
        api.getUserInfoAuth()
        .then(res => {
            dispatch({
                type:LOADING,
                status:false,
            })
            if(res.data.success) {
                dispatch({
                    type:VALIDATE_LOGIN_USER,
                    user:res.data.user,
                })
            } else {
                dispatch({
                    type:INVALID_USER
                })
            }
            
        }).catch(err => {
            dispatch({
                type:LOADING,
                status:false,
            })
            dispatch({
                type:ERROR_MESSAGE,
                error:"Something went wrong",
            })
        })
    }
}

export const getUserInfoById = (id, dispatch) => {
  api.getUserById(id)
        .then(res => {
            if(res.data.success) {
                dispatch({
                    type:VALIDATE_LOGIN_USER,
                    user:res.data.result[0],
                })
            } else {
                dispatch({
                    type:ERROR_MESSAGE,
                    error:res.data.message,
                })
            }
        })
}

export const validateLogin = (user) =>{
    return (dispatch) =>{
        api.validateLogin(user).then(resp =>{
            console.log('ac',resp.data.result);
            if(resp.data.success){
                localStorage.setItem('Authorization',JSON.stringify(resp.data.result.token));
                getUserInfoById(resp.data.result.user, dispatch)
            }else{
                dispatch({
                    type:ERROR_MESSAGE,
                    error:resp.data.message,
                })
            }
           
        })
    }
}
export const handleLogout = () =>{
    return (dispatch) =>{
        localStorage.removeItem('Authorization');
        dispatch({
            type:SET_LOGOUT,
        })
    }
}
  