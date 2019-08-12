import {ADD_POST,GET_POST,CLEAR_POST_FIELD} from '../typeConstants';
import api from '../../Api/Api';

export const savePost = (post) =>{
    
    return (dispatch) =>{
        dispatch({
            type:CLEAR_POST_FIELD,
            status:true
        })
        api.addPost(post).then(resp =>{
            dispatch({
                type:ADD_POST,
                data: resp.data,
            })
            
        })
    }
}
export const getPost = () =>{
   return (dispatch) =>{
    api.getPost().then(resp =>{
        console.log('resppp',resp);
        dispatch({
            type:GET_POST,
            data:resp.data.posts,
        })
    })
    
   } 
}
export const setClearPostField = (status) => ({
        type:CLEAR_POST_FIELD,
        status
})
export const uploadImagePost = (imageValue, message) =>{
    return (dispatch) =>{
        dispatch({
            type:CLEAR_POST_FIELD,
            status:true
        })
        api.addImagePost(imageValue, message).then(resp =>{
            console.log('myimage',resp)

         if(resp.data.success){
             console.log('myimage',resp.data)
                 dispatch({
                    type:ADD_POST,
                    data: resp.data,
                 })
            }
         
        })
}
}