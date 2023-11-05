import { UserType } from "./types";
import { ApiEndPoint } from "./env";
import axios from 'axios';
axios.defaults.baseURL = ApiEndPoint;
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    //console.log(request);
    return request;
}, error => {
    //console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response: AxiosResponse<any>) => {
    const {data,status}:any=response
    return {data,status};
}, error => {
    console.log(error);
    return Promise.reject(error);
});
export const API = {
    UserRegister: (data: UserType) => axios.post('/users/register', data),
    UserLogin : (data:UserType) => axios.post('/users/login',data)
    
}