import {SIGNUP_USER} from '../typeConstants';

const initialState={
    signUpUser:{},
    isSuccess:false,
}
export default(state=initialState,action)=> {
    switch(action.type){
        case SIGNUP_USER :{
            return {
                ...state,
                signUpUser:action.data,
                isSuccess:true,
            }
        }
        default :return state
    }
}