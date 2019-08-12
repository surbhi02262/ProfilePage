import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    let accessToken = localStorage.getItem("Authorization");
    console.log('getaccesstoken',accessToken);
    if(accessToken !== null){
        accessToken= JSON.parse(accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
        //config.headers['Access-Control-Allow-Origin'] = '*'
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
const BASE_HOST  = 'http://192.168.2.2:3000/'
export default ({
    HOST: BASE_HOST,
    getFriends: () => {
        return axios.get(BASE_HOST+`user/friend`)
    },
    getFriendRequests: () => {
        return axios.get(BASE_HOST+`user/requestreceived`)
    },
    validateLogin: (user) =>{
        return axios.get(BASE_HOST+`login/${user.email}/${user.password}`)
    },
    signUpUser : (user) =>{
        console.log('api',user);
        return axios.post(BASE_HOST+`signup`,{...user})
    },
    getUserInfoAuth:() =>{
        return axios.get(BASE_HOST+`getUserInfo`)
    },
    getSuggestedFrnds : (limit) =>{
        return axios.get(BASE_HOST+`users`,{
            params: {
                limit
            }
        })
    },
    getFriendInfoById :(id) =>{
        return axios.get(BASE_HOST+`users/user/${id}`)
    },
    getStatus :(userId,friendId) =>{
        return axios.get(BASE_HOST+`getstatus/${userId}/${friendId}`)
    },
    addFriend :(senderId,recieverId) =>{
        return axios.post(BASE_HOST+`friends/friend`,{senderId,recieverId})
    },
    uploadImage: (userId,imageValue) =>{
        console.log('imageValue' ,imageValue);
        return axios.put(BASE_HOST+`users/user`,{
            Image:imageValue
        })
    },
    upload: (file) =>{
        let fd = new FormData()
        fd.append('Image', file, file.name)
        return axios.put(BASE_HOST+`user/updateImage`,fd)
    },
    getUserById: (id) => {
        return axios.get(BASE_HOST+`users/user/${id}`)
    },
    addPost :(post) =>{
        console.log('post',post)
        return axios.post(BASE_HOST+`post`,{
           ...post
        })
    },
    getPost:() =>{
        return axios.get(BASE_HOST+`posts`)
    },
    addImagePost :(file, message) =>{
        console.log('file',file);
        let fd = new FormData()
        fd.append('image', file, file.name)
        fd.append('message', message)
        return axios.post(BASE_HOST+`post/image`,fd)
    }
})