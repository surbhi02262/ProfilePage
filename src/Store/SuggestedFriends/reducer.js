import {GET_SUGGESTED_FRIENDS} from '../typeConstants';

const initialState={
    users:[]
}
export default (state=initialState,action)=> {
    switch(action.type){
        case GET_SUGGESTED_FRIENDS:{
            return {
                ...state,
                users:action.data
            }

        }
        default :return state
    }
}