import {VALIDATE_LOGIN_USER,ERROR_MESSAGE,SET_LOGOUT, INVALID_USER} from '../typeConstants';

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
        case SET_LOGOUT :{
            return {
                ...state,
                user:{},
                isAuthenticated:false,
                errorMessage:"",
            }
        }
        case INVALID_USER :{
            return {
                ...state,
                user:{},
                isAuthenticated:false,
                errorMessage:"",
            }
        }
        // case "UPDATE_LOGIN_DATA":{
        //     let newData = state.user;
        //     newData[Image] = action.Imagedata;

        //     return {
        //         ...state,
        //         user:newData
        //     }
        // }
        default :return state
    }
}