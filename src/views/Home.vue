<template>
	<div class="home">
		<!--淡入淡出-->
		<div class="fadein-out">
			<el-button @click="show = !show">Click Me</el-button>

			<div style="display: flex; margin-top: 20px; height: 100px;">
				<transition name="el-fade-in-linear">
					<div v-show="show" class="transition-box">.el-fade-in-linear</div>
				</transition>
				<transition name="el-fade-in">
					<div v-show="show" class="transition-box">.el-fade-in</div>
				</transition>
			</div>
		</div>
		<!--缩放-->
		<div>
			<el-button @click="show2 = !show2">Click Me</el-button>

			<div style="display: flex; margin-top: 20px; height: 100px;">
				<transition name="el-zoom-in-center">
					<div v-show="show2" class="transition-box">.el-zoom-in-center</div>
				</transition>

				<transition name="el-zoom-in-top">
					<div v-show="show2" class="transition-box">.el-zoom-in-top</div>
				</transition>

				<transition name="el-zoom-in-bottom">
					<div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
				</transition>
			</div>
		</div>
		<!--<div>折叠</div>-->
		<div>
			<el-button @click="show3 = !show3">Click Me</el-button>

			<div style="margin-top: 20px; height: 200px;">
				<el-collapse-transition>
					<div v-show="show3">
						<div class="transition-box">el-collapse-transition</div>
						<div class="transition-box">el-collapse-transition</div>
					</div>
				</el-collapse-transition>
			</div>
		</div>
		<!--layout布局-->
		<div>
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purple-dark"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="12">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
		</div>
		<div>guilter间隔</div>
		<div>
			<el-row :gutter="50">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
		<div>混合布局</div>
		<div>
			<el-row :gutter="20">
				<el-col :span="16">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="16">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
		<div>分栏偏移</div>
		<div>
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6" :offset="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="6" :offset="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6" :offset="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
		<div>对齐方式</div>
		<div>
			<el-row type="flex" class="row-bg">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="end">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="space-between">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="space-around">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
		<div>响应式布局</div>
		<div>
			<el-row :gutter="10">
				<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
		</div>
		<div>图标</div>
		<div>
			<i class="el-icon-eleme"></i>
			<el-button class='el-icon-user'>用户</el-button>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
			<el-button type="primary" :loading="true">加载中</el-button>
			<el-button type="primary" :loading="false">加载中</el-button>
			<el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle='false'></el-button>
		</div>
		<div>按钮</div>
		<div>
			<el-row>
				<el-button>默认按钮</el-button>
				<el-button type="primary">主要按钮</el-button>
				<el-button type="success">成功按钮</el-button>
				<el-button type="info">信息按钮</el-button>
				<el-button type="warning">警告按钮</el-button>
				<el-button type="danger">危险按钮</el-button>
			</el-row>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				show: true,
				show2: true,
				show3: true
			}
		}
	}
</script>
<style lang="scss">
	.transition-box {
		margin-bottom: 10px;
		width: 200px;
		height: 100px;
		border-radius: 4px;
		background-color: #409EFF;
		text-align: center;
		color: #fff;
		padding: 40px 20px;
		box-sizing: border-box;
		margin-right: 20px;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>