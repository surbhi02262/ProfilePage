import axios from 'axios';

export default ({
    validateLogin: (user) =>{
        return axios.get(`http://localhost:3000/login/${user.email}/${user.password}`)
    }
})