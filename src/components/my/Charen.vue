<template>
	<div class="charen">
		<div class="tequan">
			<router-link to="/">
				<img src="https://m.zuipin.cn/wap/images/v8/ic_me_tequan.png" />
				<p>我的特权</p>
				<span>茶人V0 > </span>
			</router-link>
		</div>
		<div class="dizhi">
			<ul class="ul">
				<li v-for="(item,index) in items" :key="item.id">
					<router-link to="/">
						<img :src="item.src" />
						<p>{{item.text}}</p>
						<span>{{item.context}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
	name: 'Dingdan',
	data() {
		return {
			items:[
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_dizhi.png",text:"地址管理",context:">"},
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_bdsj.png",text:"绑定手机",context:">"},
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_xgmm.png",text:"修改密码",context:">"}
			]
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.charen{
	width: 100%;
	height: 2.45rem;
	.tequan{
		width:100%;
		height:0.50rem;
		line-height:0.5rem;
		a{
			display: block;
			img{
				display: block;
				width: 0.24rem;
				height: 0.24rem;
				float: left;
				margin: 0.12rem 0.08rem 0 0.1rem;
			}
			p{
				float: left;
				color: #333;
				font-size: 0.14rem;
			}
			span{
				display: block;
				float: right;
				color: #999;
				font-size: 0.14rem;
				margin-right: 20px;
			}
		}
	}
	.dizhi{
		.ul{
			
			margin:0 0 10px 0;
		}
		ul{
			li{
				width: 100%;
				height: 0.5rem;
				border-top:1px solid #F4F4F4;
				line-height:0.5rem;
				a{
					display: block;
					img{
						display: block;
						width: 0.24rem;
						height: 0.24rem;
						float: left;
						margin: 0.12rem 0.08rem 0 0.1rem;
					}
					p{
						float: left;
						color: #333;
						font-size: 0.14rem;
					}
					span{
						display: block;
						float: right;
						color: #999;
						font-size: 0.14rem;
						margin-right: 20px;
					}
				}
			}
			li:nth-child(3){
				margin: 0 0 10px 0;
			}
		}
	}
}
</style>
