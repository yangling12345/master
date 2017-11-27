<template>
	<div>
		<div class="banner">
			<div ref="container" class="swiper-container banner">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in banners" :key="item.id">
						<img :src="item.img" />
					</div>

				</div>
			</div>
		</div>
		<div class="parce">
			<div class="parge">
				<h4>冠和 安溪铁观音 2017春茶 乌龙茶 清香型 特级 GH903 250g*2盒 红铁盒</h4>

			</div>
			<div class="price">
				<p>醉品价</p>
				<span>￥300.00</span>
			</div>
		</div>

		<div class="pro-other">
			<dl class="dl-item d11 clearfix">
				<dt>促销</dt>
				<dd id="saleDown">
					<p><span class="spec-span zhijiang">直降</span>已优惠￥<span class="youhui">0 （10折）</span></p>
				</dd>
				<dd class="sele">
					<p><span class="spec-span">包邮</span>全场在线支付满59元免运费</p>
				</dd>
			</dl>
			<dl class="dl-item  d12 clearfix">
				<dt>服务</dt>
				<dd class="pb">
					<p class="ppp"><b>全场商品90天保价</b><b>30天无忧退换货</b></p>
				</dd>
				<dd class="sele">
					<p><b>2000城市货到付款</b><b>满59元免运费</b></p>
				</dd>
			</dl>
			<dl class="dl-item dl-d clearfix">
				<dt>数量</dt>
				<dd class="fix">
					<el-input-number v-model="num1" @change="handleChange" :min="1"></el-input-number>

				</dd>
			</dl>
		</div>

	</div>

</template>
<script>
	import Swiper from 'swiper'
	export default {
		name: 'Banner',
		data() {
			return {
				banners: [{
						img: "/static/img/l6.jpg"
					},
					{
						img: "/static/img/l5.jpg"
					},
					{
						img: "/static/img/l4.jpg"
					},
					{
						img: "/static/img/l3.jpg"
					},
					{
						img: "/static/img/l2.jpg"
					},
					{
						img: "/static/img/l1.jpg"
					}

				],
				num1: 1
			}

		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
			
			
		},
		mounted(){
			new Swiper(".banner")
		}

	}
</script>

<style scoped lang="scss">
.sele{
	p{
		margin-left: 10px;
	}
}

	img {
		display: block;
	}
	
	.banner {
		width: 100%;
		height: 3.75rem;
		margin-top: 0.44rem;
		.swiper-container {
			width: 100%;
			height: 3.75rem;
			.swiper-slide {
				width: 100%;
				height: 3.75rem;
				img {
					width: 100%;
				}
			}
		}
	}
	
	.parce {
		background: #fff;
		.parge {
			width: 100%;
			color: #333;
			line-height: 20px;
			margin-left: 12px;
			font-size: 0.14rem;
		}
		.price {			
			height: 20px;
			width: 100%;
			font-size: 0.14rem;
			margin:5px 0 0 12px;
			p {
				color: #333;
				float: left;
			}
			span {
				float: left;
				display: block;
				margin-left: 0.05rem;
				color: #c00000;
			}
		}
	}
	
	.pro-other {
		/*margin-top: 0.1rem;
		padding: 0 .1rem;*/
		background-color: #fff;
		border-top: 1px solid #e0e0e0;
		dl {
			/*line-height: .2.5rem;*/
			font-size: 0.12rem;
			border-bottom: 1px solid #e0e0e0;
			/*padding: .1rem 0;*/
			dt {
				float: left;
				padding-top: 0.05rem;
				font-size: 0.14rem;
				width: 0.5rem;
				margin-left: 10px;
			}
			dd {
				.ppp{
					float:left;
					/*margin-right: 10px;*/
				}
				padding: 0.1rem;
				color: #999;
				.spec-span {
					background-color: #bb131b;
					padding: .02rem .04rem;
					border-radius: 3px;
					-webkit-border-radius: 3px;
					color: #fff;
					margin-right: .1rem;
				}
				b {
					margin: 0 0.1rem;
					font-weight: normal;
					position: relative;
				}
				b:before {
					position: absolute;
					content: "";
					top: .05rem;
					left: -.1rem;
					width: .05rem;
					height: .05rem;
					background: #bb131b;
					border-radius: 50%;
				}
			}
			.sele {
				margin-left: 0.5rem;
				padding: 0.05rem 0 0.09rem;
			}
			.fix {
				width: 1.14rem;
				margin-left: 0.5rem;
				.el-input-number {
					width: 1.14rem;
				}
			}
		}
		.dl-d {
			border-bottom: none;
		}
	}
</style>