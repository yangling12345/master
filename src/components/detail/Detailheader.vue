<template>
  <div class="classheader">
		  <router-link to="/">
		  	<i class="iconfont icon-jiantouarrowhead7"></i>
		  	<span>{{message[0]}}</span>
		  </router-link>
		  <h2>{{message[1]}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Classheader',
  data () {
    return {
    	message:["返回","商品分类"]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.classheader{
		width: 100%;
		height: 0.44rem;
		background: #1b1b20;
		position: fixed;
		left: 0;
		top: 0;
		line-height:0.44rem ;
		z-index: 100;
		a{
			display:block;
			float: left;
			.iconfont{
			float: left;
			display:block;
			font-size: 0.16rem;
			color: #fff;
			margin-left: 0.1rem;
			}
			span{
				float: left;
				display:block;
				font-size: 0.14rem;
				color: #fff;
			}
		}
		h2{
			float: left;
			font-size: 0.16rem;
			color: #fff;
			margin-left: 1rem;
		}
	}
</style>
