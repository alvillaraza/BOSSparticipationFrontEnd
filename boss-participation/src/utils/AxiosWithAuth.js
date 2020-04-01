import axios from 'axios';

function axiosWithAuth()
{
    return axios.create({
        baseURL: 'http://localhost:7001/api/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;