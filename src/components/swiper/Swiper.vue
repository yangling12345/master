<template>
		<div class="swipe">
			<div class="s_img">
				<ul>
					<router-link to="/Detae">
						<li><img src="../../../static/img/swiper1.png" alt="" /></li>
						<li><img src="../../../static/img/swiper2.png" alt="" /></li>
						<li><img src="../../../static/img/swiper3.png" alt="" /></li>
						<li><img src="../../../static/img/swiper4.png" alt="" /></li>
					</router-link>
				</ul>
			</div>
			<div class="l_bottom">
				<div ref="container" class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in banners" :key="item.id">
							<img :src="item.img" />
						</div>
	
					</div>
				</div>
			</div>
	
		</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		name: "swiper",
		data() {
			return {
				banners: [{
						img: "/static/img/s19.png"
					},
					{
						img: "/static/img/s20.png"
					},
					{
						img: "/static/img/s21.png"
					}

				]
			}
		},
		mounted() {
			new Swiper(".banner")
		}
	}
</script>

<style scoped lang="scss">
	img {
		display: block;
		margin: 0 auto;
		width: 100%;
	}
	
	.l_bottom {
		background: #f4f4f4;
		.swiper-wrapper {
			margin-bottom: 0.4rem;
			img {
				width: 2rem;
				/*height: 2rem;*/
			}
		}
	}
</style>