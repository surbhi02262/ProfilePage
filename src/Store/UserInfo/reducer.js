import {SET_IMAGE} from '../typeConstants';

const initialState={
    userInfo:{},
    isUploadSuccess:false
}
export default (state=initialState,action) =>{
    switch(action.type){
        case SET_IMAGE:{
            return {
                ...state,
                userInfo:action.data,
                isUploadSuccess:true
            }
        }
        default:return state;
    }
}