import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import Login from '@/views/Login/Login.vue';
import Welcome from '@/views/welcome/Welcome.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: '/welcome',
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	}, {
		path: '/welcome',
		name: 'welcome',
		component: Welcome,
		children: [{
			path: '/userlist',
			name: 'userlist',
			component: () =>
				import('@/views/User/userlist')
		}, {
			path: '/useredit',
			name: 'useredit',
			component: () =>
				import('@/views/User/Useredit')
		}, {
			path: '/productadd',
			name: 'productadd',
			component: () =>
				import('@/views/Product/Productadd')
		}, {
			path: '/productedit',
			name: 'productedit',
			component: () =>
				import('@/views/Product/Productedit')
		}, {
			path: '/productlist',
			name: 'productlist',
			component: () =>
				import('@/views/Product/Productlist')
		},{
			path: '/adduser',
			name: 'adduser',
			component: () =>
				import('@/views/User/adduser')
		}]
	}
]

const router = new VueRouter({
	routes
})

//挂载路由守卫
router.beforeEach((to,from,next)=>{
//	to代表将要访问的路径
//	from代表从那个路径来的
//	next是一个函数,代表放行
	if(to.path == '/login'){
		next();
		return;
	}
	
	//获取token
	let mytoken = localStorage.getItem('mytoken')
	if(!mytoken){
		return next('/login')
	}
	
	next()
})



export default router