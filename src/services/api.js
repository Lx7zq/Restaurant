import axios from "axios";
import Tokenservice from "./token.service";


const baseURL = "http://localhost:5000";
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//add interceptor to request object
instance.interceptors.request.use((config)=>{
  const token = Tokenservice.getLocalAccessToken();
  if(token){
    config.headers['x-access-token'] = token;
  }
  return config;
}, (error)=>{
  return Promise.reject(error);
})


export default instance;
