import Vue from 'vue';
import axios from 'axios';
import { Loading,Toast} from "vant";
Vue.use(Loading);
//请求头加上token信息
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || "";


// 请求拦截器
// axios.interceptors.request.use(    
//     config => {
//         // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//         const token = store.state.token;        
//         token && (config.headers.Authorization = token);        
//         return config;    
//     },    
//     error => {        
//         return Promise.error(error);    
//     })

// 响应拦截器
axios.interceptors.response.use(
  response => {     // 服务器状态码是200的情况  
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况    
  error => {
    console.log(error);
    if (error) {

      switch (error.response.status) {
        // 401: 用户验证                  
        // 用户另处登录               
        // 用户未登录                
        case 401:
          Toast({
            duration: 2000,
            message: "用户登录异常,请重新登录",
            onClose:()=>{
              location.href = `//${location.host}/#/login`
            }            
          });

        break;
        // 404请求不存在                
        case 404:
          Toast({
            duration: 2000,
            message: '网络请求不存在',
          });
          break;
        // 500请求不存在                
        case 500:
          Toast({
            duration: 2000,
            message: '服务器内部错误',
          });
          break;
        // 其他错误，直接抛出错误提示                
        default:
          Toast({
            message: '求错误或服务器异常!',
          });
      }
      return Promise.reject(error.response);
    }
    
  }
);

//对post请求统一加参数
export const reqPos = (url, parms) => {
  let config = {};
  config = Object.assign(config, parms);
  // let config = parms
  return axios.post(url, config).then((res) => {
    return res.data;
  }).catch((e) => {
    return e;
  })
}

//对get请求预备参数
export const reqGet = (url, parms) => {
  let config = {};
  config = Object.assign(config, parms);
  return axios.get(url, {
    params: config
  }).then((res) => {
    return res.data;
  }).catch((e) => {
    return e;
  })
}

//对postformdata请求统一加参数
export const reqPosFor = (url, parms) => {
  let formdata = new FormData();
  formdata.append('file', parms.file);
  let contentType = {
    headers: {
      'Content-type': 'multipart/form-data'
    }
  }
  return axios.post(url, formdata, contentType).then((res) => {
    return res.data;
  }).catch((e) => {
    return e;
  })
}
