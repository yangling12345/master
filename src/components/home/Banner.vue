<template>
  <div class="banner">
   		<mt-swipe :auto="3000">
			  <mt-swipe-item v-for="(ele,index) in banner" :key="ele.id">
			  	<router-link class="item_a" to="/detae"><img class="item_img" :src="ele.images" /></router-link>
			  </mt-swipe-item>
			</mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
  	return{ 		
  		banner:[
  			{images:"/static/img/1.jpg"},
  			{images:"/static/img/2.jpg"},
  			{images:"/static/img/3.jpg"},
  			{images:"/static/img/4.jpg"},
  			{images:"/static/img/5.jpg"},
  			{images:"/static/img/6.jpg"},
  			{images:"/static/img/7.jpg"}
  		]
  	}
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner{
	width: 100%;
	height: 1.87rem;
	margin-top: 0.44rem;
	.item_a{
		display: block;
		.item_img{
			display: block;
			width: 100%;
			height: 1.87rem;
		}
		
	}
	
}
</style>
