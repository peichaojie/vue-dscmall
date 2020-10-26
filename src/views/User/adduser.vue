<!-- 添加用户 -->
<template>
	<div class='adduser'>
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="user_name">
				<el-input type="text" v-model="ruleForm.user_name" autocomplete="off" placeholder='请输入手机号或者邮箱'></el-input>
			</el-form-item>
			<el-form-item label="手机号" prop="phone">
				<el-input type="tel" v-model.number="ruleForm.phone" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import toolsReg from '@/tools/toolsReg.js';
	import axios from 'axios';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			var validatephone = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入手机号'));
				} else {
					if(!toolsReg.regPhone.test(value)) {
						callback(new Error('手机号格式不正确'));
					}
					callback()
				}
			};
			var validatename = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入用户名'));
				} else {
					if(!(toolsReg.regPhone.test(value) || toolsReg.regEmail.test(value))) {
						callback(new Error('用户名格式不正确'));
					}
					callback()
				}
			}
			//这里存放数据
			return {
				ruleForm: {
					pass: '',
					phone: '',
					user_name: ''
				},
				rules: {
					pass: [{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							max: 20,
							message: "长度在 6 到 20 个字符",
							trigger: "blur",
						}
					],
					phone: [{
						validator: validatephone,
						trigger: 'blur'
					}],
					user_name: [{
						validator: validatename,
						trigger: 'blur'
					}]
				}
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {						
						axios.post('/users/register',{
							user_name:this.ruleForm.user_name,
							phone:this.ruleForm.phone,
							login_password:this.ruleForm.pass
						}).then((res)=>{
							if(res.status == 200){
								this.$router.push('/userlist')
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
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
<style>

</style>