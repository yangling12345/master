<template>
	<div class="item">
		<v-detailheader></v-detailheader>
		<v-list></v-list>
		<v-footer></v-footer>
		<div class="detail clearfix">
			<ul class="list">
				<li v-for="(good,index) in goods" :key="good.id" >
					<router-link to="/">
						<p class="list-img"><img :src="good.img" /></p>
						<div class="pro-txt">
							<h4>{{good.describe}}</h4>
							<p class="branda">{{good.brand}}</p>
							<p class="pro-price">￥{{good.price}}</p>
							<p class="reput">{{good.reputation}}</p>
						</div>
					</router-link>				
				</li>
			</ul>

		</div>
		<h6>没有更多了哟~</h6>
	</div>

</template>
<script>	
	import axios from 'axios'
	import List from './List.vue'
	import Detailheader from './Detailheader.vue'
	export default {
		name: 'list',
		data() {
			return {
				goods: []
			}
		},
		methods: {
			getGoods() {
				let that = this
				axios.get("/static/friends.json")
					.then((res) => {
//						console.log(res.data)
						that.goods = res.data
					})
					.catch((error) => {
						console.log(error)
					})
			}

		},
		created() {
			this.getGoods()
		},
		components:{
			'v-detailheader':Detailheader,
			'v-list':List
		}
	}
</script>
<style scoped lang="scss">
	.detail {
		width: 100%;
		background: #F4F4F4;
		overflow: hidden;
		.list {
			margin-top:10px;
			li:nth-child(odd){
				border-right: 1px solid #f7f7f7;
			}
			li {
				background:#FFFFFF;
				width: 49.85%;
				float: left;
				border-bottom:1px solid #f7f7f7 ;
				a{
					margin: 0 auto;
					width: 1.665rem;
					height: 2.39rem;
					display:block;
					/*background: red;*/
					overflow: hidden;
					.list-img{
						margin-top:15px;
						img{
							display: block;
							width: 1.3rem;
							height: 1.04rem;
							margin-left: 0.18rem;
						}
					}
					.pro-txt{
						h4{
							font-size: 0.14rem;
							color: #333;
							display: -webkit-box;
							overflow: hidden;
							text-overflow: ellipsis;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							line-height: 0.2rem;
							margin: 0.05rem 0 0.1rem 0;
						}
						.branda{
							text-align: center;
							font-size: 0.13rem;
							color: #999;
						}
						.pro-price{
							font-size: 0.14rem;
							color: #c00000;
							text-align: center;
							margin-top:0.1rem;
						}
						.reput{
							font-size: 0.13rem;
							color: #999;
							text-align: center;
							margin-top:0.08rem;
						}
					}
				}
			}
		}
	}
	h6 {
		color: #adadad;
		font-size: .15rem;
		text-align: center;
		background: #F4F4F4;
		margin-bottom: 0.45rem;
		line-height: 40px;
	}
</style>