<!--  -->
<template>
	<div class='welcome'>
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu default-active="/userlist" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router='true'>
						<el-submenu v-for='(menuListData) in menuListDatas' :key='menuListData.id' :index='menuListData.path'>
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>{{menuListData.title}}</span>
							</template>
							<el-menu-item v-for="menuList in menuListData.child" :key='menuList.id' :index='menuList.path'>
								<i class="el-icon-menu"></i>
								<span>{{menuList.title}}</span>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				menuListDatas:[{
					id:1,
					title:'用户管理',
					path:'userlist',
					child:[{
						id:1001,
						title:'用户列表',
						path:'userlist'
					},{
						id:1002,
						title:'添加用户',
						path:'adduser'
					}]
				},{
					id:2,
					title:'产品管理',
					path:'productlist',
					child:[{
						id:2001,
						title:'产品列表',
						path:'productlist'
					},{
						id:2002,
						title:'添加产品',
						path:'productadd'
					},{
						id:2003,
						title:'修改产品',
						path:'productedit'
					}]
				}]
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {

		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style lang="scss">
	.welcome {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		.el-container {
			height: 100%;
		}
		.el-header {
			background-color: #333;
			color: #FFFFFF;
			line-height: 60px;
		}
		.el-aside {
			height: 100%;
			background-color: #545c64;
		}
		.el-menu{
			border-right: 0;
		}
	}
</style>