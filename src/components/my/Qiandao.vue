<template>
	<div class="qiandao">
		<div class="entry">
			<div class="flex">
				<div class="flex_item one">
					<img src="https://m.zuipin.cn/wap/images/v8/img_jifenshangcheng.jpg"/>
				</div>
				<div class="flex_item two">
					<img src="https://m.zuipin.cn/wap/images/v8/ic_qiandao_q.png"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: 'Qiandao',
	data() {
		return {
			
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.qiandao{
	width: 100%;
	.entry{
		height: 0.97rem;
		background:  #f4f4f4;
		overflow: hidden;
		.flex{
			height: 0.75rem;
			background: #FFFFFF;
			margin-top: 10px;
			.flex_item{
				width: 1.725rem;
					height: 0.55rem;
				/*float: left;*/
			}
			.one{
				float: left;
				margin: 10px 0 0 10px;
					/*margin-top: 10px;*/
				img{
					display: block;
					width: 1.725rem;
					height: 0.55rem;
				}
			}
			.two{
				float: right;
				margin: 10px 10px 0 0;
				background: url(../../../static/img/img_qiandao.jpg) no-repeat;
				background-size: 100% 100%;
				img{
					width: 0.325rem;
					height: 0.14rem;
					float: right;
					margin:0.09rem 0.17rem 0 0;
				}
			}
		}
	}
}	
</style>
