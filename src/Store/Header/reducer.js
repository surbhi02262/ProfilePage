import {SET_HEADER_TITLE} from '../typeConstants';

const initialState={
    appName:"Facebook",
    headerTitle:"Home"
}

export default (state=initialState,action) =>{
    switch(action.type){
        case SET_HEADER_TITLE : {
            return {
                ...state,
                headerTitle: action.headerTitle
            }
        }
        default :{
            return {
                ...state
            }         
        }
    }
}