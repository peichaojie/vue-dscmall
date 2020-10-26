<!-- 修改用户 -->
<template>
	<div class='useredit'>
		<el-input v-model='userinfo.id'></el-input>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed label="序号">
				
			</el-table-column>
			<el-table-column label="姓名">
				<el-input v-model='userinfo.name'></el-input>
			</el-table-column>
			<el-table-column label="年龄">
				<el-input v-model='userinfo.age'></el-input>
			</el-table-column>
			<el-table-column label="地址">
				<el-input v-model='userinfo.address'></el-input>
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="210">
				<template>
					<el-button @click="handleClick(userinfo)" type="text" size="small">保存</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="序号">
				<el-input v-model='form.id'></el-input>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input v-model='form.name'></el-input>
			</el-form-item>
			<el-form-item label="年龄">
				<el-input v-model='form.age'></el-input>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model='form.address'></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click='saveuser(this.form)'>保存</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>-->

	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import { EventBus } from '@/tools/Bus.js'

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				tableData: [{}],
				userinfo: {
					id:'',
					name:'',
					age:'',
					address:''
				},
				form:{
					id:'',
					name:'',
					age:'',
					address:''
					
				}
			}
		},
		//监听属性 类似于data概念
		computed: {},
		//方法集合
		methods: {
//			saveuser(data){
//				this.$store.dispatch('actgetuser',data)
//				this.$router.push('/userlist')
//			}
			//			handleClick(data) {
			//				this.$store.dispatch('actgetuser', data)
			//				this.$router.push('/userlist');
			//
			//				console.log(this.userinfo)
			//			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
//			console.log(EventBus)
			EventBus.$on('edit', (data) => {
				console.log(data)
				this.userinfo = data
			})
//						this.userinfo = this.$store.state.user
//			this.form = this.$store.state.user.row
//			console.log(this.$store.state.user)
			//
			//			for(var key in this.$store.state.user) {
			//				this.userinfo[key] = this.$store.state.user[key]
			//			}
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style>

</style>