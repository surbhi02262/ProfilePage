import {SET_FRIEND_PROFILE_DATA,ERROR_MESSAGE,
    GET_STATUS,ADD_FRIEND, FRIENDS_LIST, FRIENDS_SUGGESTIONS_LIST,
     FRIENDS_REQUEST_RECEIVED} from '../typeConstants';

const initialState={
    friendInfo:{},
    statusInfo:{},
    addFriendData:{},
    friendList:[],
    requestReceived: [],
    isSuccess:false,
}
export default (state= initialState,action) =>{
    switch(action.type){
        case SET_FRIEND_PROFILE_DATA:{
            return {
                ...state,
                friendInfo:action.data
            }
        }
        case FRIENDS_LIST:{
            return {
                ...state,
                friendList:action.data
            }
        }
        case FRIENDS_REQUEST_RECEIVED:{
            return {
                ...state,
                requestReceived:action.data
            }
        }
        
        case GET_STATUS:{
            return {
                ...state,
                statusInfo:action.data,
            }
        }
        case ADD_FRIEND:{
            return {
                ...state,
                addFriendData:action.data,
                isSuccess:true,

            }
        }
        default:return state
    }
}