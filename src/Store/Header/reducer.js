import {SET_HEADER_TITLE, LOADING} from '../typeConstants';

const initialState={
    appName:"Facebook",
    headerTitle:"Home",
    loading: true
}

export default (state=initialState,action) =>{
    switch(action.type){
        case SET_HEADER_TITLE : {
            return {
                ...state,
                headerTitle: action.headerTitle
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: action.status
            }
        }
        default :{
            return {
                ...state
            }         
        }
    }
}