<!--用户列表  -->
<template>
	<div class='userlist'>

		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>
				<a href="/">活动管理</a>
			</el-breadcrumb-item>
			<el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>
		<!--输入框-->
		<el-row :gutter="20" style='margin-top: 20px;'>
			<el-col :span='6'>
				<el-input placeholder="请输入内容" v-model='keywords'></el-input>
			</el-col>
			<el-col :span='6'>
				<el-button type="primary" @click='searchuser(1,5)'>搜索</el-button>
			</el-col>
		</el-row>
		<!--表格-->
		<el-table :data="tableData.data" border style="width: 100%">
			<el-table-column fixed prop="user_id" label="序号">
			</el-table-column>
			<el-table-column prop="user_name" label="姓名">
			</el-table-column>
			<el-table-column prop="age" label="年龄">
			</el-table-column>
			<el-table-column prop="phone" label="手机号">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="210">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
					<el-button type="info" size="small" @click='useredit(scope.row)'>编辑</el-button>
					<el-button type="danger" size="small" @click='deleUser(scope.row)'>删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--设置分页-->
		<el-pagination background layout="total,prev, pager, next,jumper" @current-change="handleCurrentChange" :total="tableData.total" :page-size="tableData.size" :current-page='tableData.num'>
		</el-pagination>

		<!--修改页面-->

		<el-dialog title="修改用户" :visible.sync="dialogFormVisible">
			<el-form :model="form" ref="formName" label-width="100px" :rules='editRules'>
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="form.user_name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
					<el-input v-model="form.phone" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄" :label-width="formLabelWidth">
					<el-input v-model="form.age" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="form.address" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitForm('formName')">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	//		import {EventBus} from '@/tools/Bus.js'
	import axios from 'axios';
	import toolsReg from '@/tools/toolsReg.js'

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
				keywords: '',
				form: {
					user_name: '',
					address: '',
					age: '',
					phone: ''
				},
				dialogFormVisible: false,
				formLabelWidth: '120px',
				editRules: {
					user_name: [{
						validator: validatename,
						trigger: "blur"
					}],
					phone: [{
						validator: validatephone,
						trigger: "blur"
					}],
				}
			};
		},
		//监听属性 类似于data概念
		computed: {
			tableData() {
				return this.$store.state.userlist
			}
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			handleClick(row) {
				console.log(row);
				console.log(this.$store.state.userlist.data)
			},
			//编辑
			useredit(row) {
				//				console.log(row)
				this.form = row;
				this.dialogFormVisible = true

			},
			//获取用户列表
			getuser(page, size) {
				this.$store.dispatch('getuser', {
					page: page,
					size: size
				})
			},
			//上一页下一页
			handleCurrentChange(page) {
				this.$store.dispatch("getuser", {
					page: page,
					size: 5
				});
			},
			//修改信息
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						axios.post('/users/edituser', JSON.stringify(this.form)).then((res) => {
							if(res.status == 200) {
								this.$message({
									message: "修改成功",
									type: "success",
								});
								this.$router.push('/')
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//删除
			deleUser(row) {
				axios.get(`/users/deleuser?user_id=${row.user_id}`).then((res) => {
					if(res.status == 200) {
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						//删除成功之后重新获取数据
						this.getuser(1, 5)
					}
				})
			},
			//搜索
			searchuser(page, size) {
				this.$store.dispatch('searchuser', {
					page,
					size,
					keywords: this.keywords
				})
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
			this.getuser(1, 5)
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