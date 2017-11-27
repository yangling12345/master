<template>
	<div class="pd-container clearfix">
		<ul class="pro-tab ">
			<li class="active">详情</li>
			<li>规格</li>
			<li>评论</li>
		</ul>
		<div class="dlist">
			<div class="d-img" v-for="(item,index) in dlists" :key="item.id"><img :src="item.img" /></div>

		</div>
		<!--<mt-tab-container v-model="active">
		  <mt-tab-container-item id="tab-container1">
		    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab-container2">
		    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab-container3">
		    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
		  </mt-tab-container-item>
        </mt-tab-container>-->
	</div>

</template>

<script>
	//	import { TabContainer, TabContainerItem } from 'mint-ui';
	//
	//Vue.component(TabContainer.name, TabContainer);
	//Vue.component(TabContainerItem.name, TabContainerItem);
	export default {
		name: 'dlist',
		data() {
			return {
				dlists: [{
						img: "/static/img/t1.jpg"
					},
					{
						img: "/static/img/t2.jpg"
					},
					{
						img: "/static/img/t3.jpg"
					},
					{
						img: "/static/img/t4.jpg"
					},
					{
						img: "/static/img/t5.jpg"
					},
					{
						img: "/static/img/t6.jpg"
					},
					{
						img: "/static/img/t7.jpg"
					},
					{
						img: "/static/img/t8.jpg"
					},
					{
						img: "/static/img/t9.jpg"
					},
					{
						img: "/static/img/t10.jpg"
					},
					{
						img: "/static/img/t11.jpg"
					},
					{
						img: "/static/img/t12.jpg"
					},
					{
						img: "/static/img/t13.jpg"
					},
					{
						img: "/static/img/t14.jpg"
					},
					{
						img: "/static/img/t15.jpg"
					},
					{
						img: "/static/img/t16.jpg"
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.pd-container {
		background: #fff;
		height: auto;
		margin-top: .1rem;
		.pro-tab {
			padding: 0 .1rem;
			border-bottom: 1px solid #eee;
			background-color: #fafafa;
			text-align: center;
			margin-bottom: .2rem;
			li {
				display: inline-block;
				height: .4rem;
				line-height: .4rem;
				color: #333;
				width: 0.7rem;
				text-align: center;
				font-size: 0.14rem;
			}
			.active {
				color: #ff3600;
			}
		}
	}
	
	.dlist {
		height: 100%;
		margin-bottom: .6rem;
		.d-img {
			img {
				width: 100%;
				display: block;
			}
		}
	}
</style>