//引入axios
import axios from 'axios';
//配置全局域名
axios.defaults.baseURL = 'http://192.168.0.198:3000/api/v1';

//配置拦截器
// Add a request interceptor
axios.interceptors.request.use(function(config) {
	// Do something before request is sent
	//读取本地的token
	let token = localStorage.getItem('mytoken');
	if(token) {
		config.headers['Authorization'] = token;
	}
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});
//登录验证
export const isLogin = (params) => {
	return axios.post('/users/login', params).then((res) => res.data)
}

//获取用户列表
export const getuserlist = (params) => {
	return axios.get(`/users?page=${params.page}&size=${params.size}`).then((res) => res.data)
}

//修改用户
export const editUser = (params) => {
	console.log(params)
	return axios.post('/users/edituser').then((res) => {
		return res.data
	})
}
//用户搜索
export const search = (params) => {
	return axios.get(`/users/search?page=${params.page}&size=${params.size}&keywords=${params.keywords}`).then((res) => {
		return res.data
	})
}