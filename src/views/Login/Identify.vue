<!--  -->
<template>
	<div class="identify">
		<canvas id="hg-canvas" :width="contentWidth" :height="contentHeight"></canvas>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		props: {
			identifyCode: {
				type: String,
				default: "abc6",
			},
			fontSizeMin: {
				//字体最小值
				type: Number,
				default: 16,
			},
			fontSizeMax: {
				//字体最大值
				type: Number,
				default: 40,
			},
			backgroundColorMin: {
				type: Number,
				default: 180,
			},
			backgroundColorMax: {
				type: Number,
				default: 240,
			},
			colorMin: {
				type: Number,
				default: 50,
			},
			colorMax: {
				type: Number,
				default: 150,
			},
			lineColorMin: {
				type: Number,
				default: 50,
			},
			lineColorMax: {
				type: Number,
				default: 200,
			},
			contentWidth: {
				//内容宽度
				type: Number,
				default: 120,
			},
			contentHeight: {
				//内容高度
				type: Number,
				default: 40,
			},
		},
		methods: {
			// 生成一个随机数
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			//随机生成一个颜色值rgb
			randomColor(min, max) {
				let r = this.randomNum(min, max);
				let g = this.randomNum(min, max);
				let b = this.randomNum(min, max);
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			drawPic() {
				//绘图
				let canvas = document.getElementById("hg-canvas");
				let ctx = canvas.getContext("2d");
				ctx.textBaseline = "bottom";
				//绘制背景
				ctx.fillStyle = this.randomColor(
					this.backgroundColorMin,
					this.backgroundColorMax
				);
				ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
				//绘制文字
				for(let i = 0; i < this.identifyCode.length; i++) {
					this.drawText(ctx, this.identifyCode[i], i);
				}
				this.drawLine(ctx);
			},
			// 绘制文本
			drawText(ctx, txt, i) {
				ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
				ctx.font =
					this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px Arial";
				let x = ((i + 1) * this.contentWidth) / (this.identifyCode.length + 1);
				let y = this.randomNum(this.fontSizeMax - 10, this.contentHeight);
				let deg = this.randomNum(-45, 45);

				ctx.translate(x, y); //坐标位置
				ctx.rotate((deg * Math.PI) / 180); //旋转的弧度
				ctx.fillText(txt, 0, 0);

				//恢复角度
				ctx.rotate(-(deg * Math.PI) / 180); //旋转的弧度
				ctx.translate(-x, -y);
			},
			//绘制线条
			drawLine(ctx) {
				for(let i = 0; i < 16; i++) {
					ctx.strokeStyle = this.randomColor(
						this.lineColorMin,
						this.lineColorMax
					);
					ctx.beginPath(); //开始绘制路径
					ctx.moveTo(
						this.randomNum(0, this.contentWidth),
						this.randomNum(0, this.contentHeight)
					);
					ctx.lineTo(
						this.randomNum(0, this.contentWidth),
						this.randomNum(0, this.contentHeight)
					);
					ctx.stroke();
				}
			},
		},
		mounted() {
			this.drawPic();
		},
		watch:{
			identifyCode(){
				this.drawPic();
			}
		}
	};
</script>
<style lang="scss">
	.identify {
		width: 100%;
		height: 40px;
	}
</style>