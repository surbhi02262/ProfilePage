import {ADD_POST,GET_POST,CLEAR_POST_FIELD} from '../typeConstants';

const initialState={
    post:{},
    message:"",
    posts:[],
    clearPostField:false,
}
export default (state=initialState,action) =>{
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                post:action.data,
            }
        }
        case GET_POST:{
            return {
                ...state,
                posts:action.data,
            } 
        }
        case CLEAR_POST_FIELD:{
            return {
                ...state,
                clearPostField:action.status
            }
        }
        default :return state
    }
}
