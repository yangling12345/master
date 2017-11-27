<template>
	<div class="person-info flex">
		<div class="my-head">
			<router-link to="/">
					<img src="https://m.zuipin.cn/wap/images/人.png" alt="">
			</router-link>
		</div>
		<div class="zuipin-section user-intr">
			<router-link to="/">
				<p class="user-account">136****5993</p>
				<p class="user-level flex flex-start">
					<span>茶人</span>
					<span class="level">V0</span>
				</p>
			</router-link>
		</div>
		<router-link class="spa" to="/">	
				<span class="isV">v</span>
				 成长值 0
		</router-link>
	</div>
</template>

<script>
	export default {
	name: 'Popular',
	data() {
		return {

		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.person-info{
		background: linear-gradient(to bottom right, #dbdbdb, #f4f4f4);
		width: 100%;
		height: 1.12rem;
		margin-top: 0.44rem;
		.my-head{
			float:left;
			margin:0.3rem 0.1rem 0 0.1rem;
			a{
				display: block;
				img{
					display: block;
					width: 0.4rem;
					height: 0.4rem;
				}
			}
		}
		.zuipin-section{
			float: left;
			margin:0.3rem 0 0 0;
			a{
				display:block;
				.user-account{
					font-size: 0.16rem;
					font-weight: bold;
					margin: 0.04rem 0;
					color: #333;	
				}
				.user-level{
					span{
						display: block;	
						font-size: 0.13rem;
						float:left;
						margin-top:0.02rem;	
						color: #333;			
					}
					.level{
						float: left;
						margin-left: 0.05rem;
						background: #ff3600;
    				border-radius: 5px;
    				color: #FFFFFF;
    				width: 25px;
    				text-align: center;
    				line-height: 0.15rem;
					}
				}
			}
		}
		.spa{
			background: linear-gradient(to bottom right, #ff3700, #ff5500);
			height: 0.3rem;
			width: 0.8rem;
			line-height: 0.3rem;
			display: block;
			float: right;
			font-size: 0.12rem;
			border-radius: 15px 0 0 15px;
			margin-top: 0.66rem;
			color: #FFFFFF;
			.isV{
				line-height: 12px;
				text-align: center;
				display: block;
				width: 12px;
				height: 12px;
				background: #FFFFFF;
				float: left;
				border-radius: 5px;
				margin: 0.07rem 0.05rem 0 0.12rem;
				color: #ff3600;
			}
		}
	}
</style>
