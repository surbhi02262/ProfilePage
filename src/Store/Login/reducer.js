import {VALIDATE_LOGIN_USER,ERROR_MESSAGE} from '../typeConstants';

const initialState={
    user:{},
    isAuthenticated:false,
    errorMessage:""
}
export default (state=initialState,action) =>{
    switch(action.type){
        case VALIDATE_LOGIN_USER:{
            return {
                ...state,
                user:action.user,
                isAuthenticated:true,
                errorMessage:""
            }
        }
        case ERROR_MESSAGE:{
            return {
                ...state,
                errorMessage: action.error,
                isAuthenticated:false,
            }
        }
        default :return state
    }
}