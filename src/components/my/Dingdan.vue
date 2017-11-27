<template>
	<div class="dingdan">
		<div class="dg">
			<ul>
				<li>
					<router-link to="/">
						<span class="span_one">
							<img src="https://m.zuipin.cn/wap/images/v8/ic_me_dingdan.png" />
						</span>
						<p class="p">我的订单</p>
						<span class="span_two">全部订单 ></span>
					</router-link>
					
				</li>
			</ul>
		</div>
		<div class="da">
			<ul>
				<li v-for="(item,index) in items" :key="item.id">
					<router-link to="/">
						<span><img :src="item.src"/></span>
						<p>{{item.text}}</p>
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
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_dfkdd.png",text:"待付款"},
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_dfhdd.png",text:"待发货"},
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_yfhdd.png",text:"待收货"},
				{src:"https://m.zuipin.cn/wap/images/v8/ic_me_dpjdd.png",text:"待评价"}
			]
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dingdan{
	width: 100%;
	height: 1.36rem;
	background: #F4F4F4;
	.dg{
		width: 100%;
		height: 0.52rem;
		background: #FFFFFF;
		line-height: 0.52rem;
		ul{
			li{
				a{
					.span_one{
						display: block;
						float: left;
						margin: 0.14rem 0.08rem 0 0.12rem;
						img{
							display: block;
							width: 0.24rem;
							height: 0.24rem;
						}
					}
					.p{
						float: left;
						color: #333;
						font-size: 0.14rem;
					}
					.span_two{
						display: block;
						float: right;
						color: #999;
						font-size: 0.14rem;
						margin-right: 10px;
					}
				}
			}
		}
	}
	.da{
		background: #FFFFFF;
		border-top:1px solid #F4F4F4;
		ul{
			display:flex;
			text-align: center;
			li{
				width: 25%;
				a{
					display:block;
					span{
						display: block;
						margin: 0.15rem 0 0.06rem 0;
						img{
							display: block;
							width: 0.2rem;
							height: 0.2rem;
							margin-left: 0.38rem;
						}
					}
					p{
						font-size: 0.14rem;
						color: #676767;
						margin: 0 0 0.15rem 0;
					}
				}
			}
		}
	}
}
</style>
