import {GET_SUGGESTED_FRIENDS} from '../typeConstants';
import api from '../../Api/Api';


export const getSuggestedFriends = (limit) =>{
    return (dispatch) =>{
        api.getSuggestedFrnds(limit).then(resp =>{
            dispatch({
                type:GET_SUGGESTED_FRIENDS,  
                data: resp.data.users
            })
        })
        
    }
}