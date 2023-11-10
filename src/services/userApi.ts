import { EnquiryType, UserType } from "./types";
import { ApiEndPoint } from "./env";
import axios from 'axios';
axios.defaults.baseURL = ApiEndPoint;
let loggedUser = localStorage.getItem('loggedUser');
let user = JSON.parse(loggedUser || JSON.stringify({ jwt: '' }));
//axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    let loggedUser = localStorage.getItem('loggedUser');
    user = JSON.parse(loggedUser || JSON.stringify({ jwt: '' }));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.jwt;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(({data,status}:any) => {
    //const {data,status}:any=response
    return {data,status};
}, error => {
    console.log(error.response);
    return Promise.reject(error.response);
});
export const API = {
    UserRegister: (data: UserType) => axios.post('/users/register', data),
    UserLogin: (data: UserType) => axios.post('/users/login', data),
    GetCategory : (id:number) => axios.get('/category/get/'+id),
    ProductInsert: (data: FormData) => axios.post('/products', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
    GetPublicProducts:() => axios.get('/products',{ headers: {'Authorization':'Bearer ' + user.jwt} }),
    getMyProducts: () => axios.get('/products/my-products'),
    getAllMachines: () => axios.get('/products/all-machines'),
    getAllPendingMachines: () => axios.get('/products/all-pending-machines'),
    getAllPendingCategories: () => axios.get('/category/pending'),
    sendEnquiry: (data: EnquiryType) => axios.post('/enquiry', data),
    getEnquiries: () => axios.get('/enquiry'),
    
}