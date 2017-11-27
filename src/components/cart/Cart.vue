<template>
  <div class="cart">
		  <v-cartheader></v-cartheader>
		  <v-footer></v-footer>
		  <div class="cart-services">
		    <img src="https://m.zuipin.cn/wap/images/cart-services.png" alt="">
		  </div>
		  <div class="zuipin-section cart-wrapper zp-scroll">
			    <div class="cart-empty">
			    	<div class="cart-img"><img src="https://m.zuipin.cn/wap/images/empty.jpg" alt=""></div>
			    	<h3>购物车还没有商品哟~</h3>
					</div>
					<router-link class="go-index" to="/">去首页逛逛</router-link>
					<!--<a href="https://m.zuipin.cn" class="go-index">去首页逛逛</a>-->
			</div>
  </div>
</template>

<script>
	import Cartheader from './Cartheader.vue'
export default {
  name: 'Cart',
  data () {
    return {
    	
    }
  },
  components:{
  	'v-cartheader':Cartheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.cart-services{
		width: 100%;
		margin-top: 0.44rem;
		background: #f4f4f4;
		img{
			display: block;
			width: 100%;
			height: 0.2rem;
		}
	}
	.cart-wrapper{
		width: 100%;
		height: 5.58rem;
		background: #f4f4f4;
		overflow: hidden;
		.cart-empty{
			margin:1rem 0 0 0;
			.cart-img{
				img{
					display: block;
					width: 1.15rem;
					height: 0.9745rem;
					margin-left: 1.28rem;
				}
			}
			h3{
				text-align: center;
				font-size: 0.15rem;
				margin: 0.3rem 0;
			}
		}
		.go-index{
			display: block;
			width: 1.07rem;
			height: 0.36rem;
			text-align: center;
			line-height: 0.36rem;
			border: 1px solid #ff3600;
			-webkit-border-radius: 0.18rem;
			font-size: 0.15rem;
			color:#ff3600;
			margin: 0 auto;
		}
	}
	
</style>
