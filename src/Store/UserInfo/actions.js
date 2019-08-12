import {VALIDATE_LOGIN_USER} from '../typeConstants';
import api from '../../Api/Api';

export const setImage = (userId, imageValue) =>{
   console.log('userId',userId, imageValue)
   return (dispatch) =>{
       api.uploadImage(userId, imageValue).then(resp =>{
        if(resp.data.success){
            console.log(resp.data)
                dispatch({
                    type:VALIDATE_LOGIN_USER,
                    user:resp.data.result,
                })
        }
        //    console.log('inside api',resp.data)
        // dispatch({
        //     type:SET_IMAGE,
        //     data:resp.data
        // })
        // // dispatch({
        // //     type:"UPDATE_LOGIN_DATA",
        // //     Imagedata: resp.data.Image
        // // })
       })
      
   }
}
export const upload = (imageValue) =>{
    console.log('userId', imageValue)
    return (dispatch) =>{
        api.upload(imageValue).then(resp =>{
         if(resp.data.success){
             console.log(resp.data)
                 dispatch({
                     type:VALIDATE_LOGIN_USER,
                     user:resp.data.result,
                 })
            }
         
        })
    }  
}