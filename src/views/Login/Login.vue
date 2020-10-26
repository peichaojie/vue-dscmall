<!--  -->
<template>
	<div class="hg-login-wrap">
		<div class="hg-title">好谷就业力学生管理系统</div>
		<div class="hg-login">
			<el-form ref="form" :rules="rules" :model="form">
				<el-form-item prop="user_name">
					<el-input v-model="form.user_name" placeholder="手机号/邮箱"></el-input>
				</el-form-item>
				<el-form-item prop="login_password">
					<el-input v-model="form.login_password" placeholder="密码" show-password></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="form.captcha" placeholder="验证码" style="width:70%"></el-input>
					<div class="identify" @click="yzm">
						<Identify :identifyCode="code" />
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('form')">登录</el-button>
				</el-form-item>
				<el-form-item>
					<el-button>注册</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Identify from "./Identify";
	import toolsReg from '@/tools/toolsReg';
	//引入登录的axios
	import { isLogin } from '@/api/index.js';
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			Identify,
		},
		data() {
			var validatePhone = (rule, value, callback) => {
				if(value === "") {
					callback(new Error("手机号/邮箱不能为空"));
				} else {
					if(!(toolsReg.regPhone.test(value) || toolsReg.regEmail.test(value))) {
						callback(new Error("手机号/邮箱格式不正确"));
					}
					callback();
				}
			};

			//这里存放数据
			return {
				form: {
					user_name: "",
					login_password: "",
					captcha: "", //验证码
				},
				code: "",
				rules: {
					user_name: [{
						validator: validatePhone,
						trigger: "blur"
					}],
					login_password: [{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							max: 20,
							message: "长度在 6 到 20 个字符",
							trigger: "blur",
						},
					],
				},
			};
		},
		computed: {},
		methods: {
			yzm() {
				let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
				let str = '';
				for(var i = 0; i < 4; i++) {
					let num = Math.floor(Math.random() * 26);
					str += arr[num]
				}
				this.code = str;
				console.log(str)
			},
			submitForm(formName) {
				console.log(formName); //form
				this.$refs[formName].validate((valid) => {
					if(valid) {
						if(this.form.captcha != this.code) {
							alert('验证码错误')
							return
						}
						//验证码验证通过之后，把token设置到本地存储
						isLogin(this.form).then((res) => {
							console.log(res);
							if(res.status == 200) {
								//设置token
								localStorage.setItem("mytoken", res.token);
								this.$router.push('/welcome');
								console.log(localStorage.getItem('mytoken'))
							} else if(res.status == 500) {
								this.$message({
									message: '验证错误，登录失败',
									type: 'error'
								});
							}
						})
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
		},
		mounted() {
			this.yzm()
		},
	};
</script>
<style lang="scss">
	.hg-login-wrap {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		background: #409eff;
		.hg-login {
			padding: 0 20px;
		}
		.el-form {
			margin-top: 30px;
		}
		.el-input {
			float: left;
		}
		.el-button {
			width: 100%;
		}
		.identify {
			width: 25%;
			float: left;
			margin-left: 5%;
		}
		.hg-title {
			text-align: center;
			font-size: 30px;
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 99;
			transform: translate(-50%, -50%);
			margin-top: -220px;
			color: #fff;
		}
		.hg-login {
			width: 480px;
			height: 360px;
			position: absolute;
			margin: -180px 0 0 -240px;
			left: 50%;
			top: 50%;
			background: #fff;
		}
	}
</style>