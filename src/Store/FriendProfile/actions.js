import {SET_FRIEND_PROFILE_DATA,ERROR_MESSAGE,GET_STATUS,ADD_FRIEND,FRIENDS_LIST, FRIENDS_SUGGESTIONS_LIST, FRIENDS_REQUEST_RECEIVED} from '../typeConstants';
import api from '../../Api/Api';

export const showfriendInfo = (id) =>{
    return (dispatch) =>{
        api.getFriendInfoById(id)
            .then(resp =>{
                dispatch({
                    type:SET_FRIEND_PROFILE_DATA,
                    data:resp.data[0]
                })
            })
            .catch(err =>{
                dispatch({
                    type:ERROR_MESSAGE,
                    error:"Friend Invalid"
                })
            })
       
    }
}

export const getFriends = () => {
    return (dispatch) =>{
        api.getFriends()
        .then(res => {
            dispatch({
                type: FRIENDS_LIST,
                data: res.data.result
            })
        })
        // api.getFriendSuggestion()
        // .then(res => {
        //     dispatch({
        //         type: 'FRIENDS_SUGGESTIONS_LIST',
        //         data: res.data
        //     })
        // })
        api.getFriendRequests()
        .then(res => {
            dispatch({
                type: FRIENDS_REQUEST_RECEIVED,
                data: res.data.result
            })
        })
    }
}
export const getStatus = (userId,friendId) =>{
    return (dispatch) =>{
        api.getStatus(userId,friendId).then(resp =>{
            dispatch({
                type:GET_STATUS,
                data:resp.data
            })
        })
        
    }
}
export const addFriend = (userId,friendId) =>{
    return (dispatch) =>{
        api.addFriend(userId,friendId).then(resp =>{
            console.log('lki',resp.data)
            dispatch({
                type:ADD_FRIEND,
                data:resp.data
    
            })
        })
        
    }
}