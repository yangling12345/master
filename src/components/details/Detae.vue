<template>

	<div class="detae">
		<div class="header">
			<router-link to="/" class="iconfont icon-jiantouarrowhead7 hd_left ">{{mes}}</router-link>
			<h1 class="title">{{message}}</h1>
		</div>
		<v-banner></v-banner>
		<v-list></v-list>

		<div class="pd-bottom">
			<router-link to="/"><i class="iconfont icon-gouwuche"></i></router-link>
			<router-link to="/" class="shing">立即购买</router-link>
			<router-link to="/" class="join">加入购物车</router-link>
		</div>
	</div>

</template>

<script>
	import Banner from './Banner.vue'
	import AppDlist from './Dlist.vue'
	export default {
		name: 'detae',
		data() {
			return {
				mes: "返回",
				message: "【非遗大师王顺明亲制】琪明 武夷岩茶 2016春茶 乌龙茶 茗匠集大红袍 中火 特级 48g 单罐"
			}
		},
		components: {
			'v-banner': Banner,
			'v-list': AppDlist
		}
		

	}
</script>

<style scoped lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		height: 0.44rem;
		width: 100%;
		background: #282828;
		display: flex;
		justify-content: center;
		line-height: 0.44rem;
		z-index: 100;
		h1 {
			font-size: .18rem;
			text-align: center;
			color: #fff;
			overflow: hidden;
			width: 1.5rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.hd_left {
			position: fixed;
			left: 0.15rem;
			top: 0;
			color: #fff;
		}
	}
	
	.pd-bottom {
		height: 0.5rem;
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		z-index:100;
		
		line-height:0.5rem;
		border-top: 1px solid #e0e0e0;
		text-align: center;
		
		.iconfont{
			width:33%;
			float:left;
			color:#333;
			background:#fff;
			height:0.52rem;
			font-size:0.3rem;
		}	
		a{
			color:#fff;
			
		}
		.shing{
			width:33%;
			/*margin:0 auto;*/
			float:left;
			background:#ff8766;
			font-size: 0.14rem;
			
		}
		.join{
			width:34%;
			float:right;
			background:#ff3600;
			font-size: 0.14rem;
		}
		
	}
</style>