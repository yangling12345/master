<template>
	<div class="navigation">
	  <div class="navigation_top">
	  		<img src="https://m.zuipin.cn/wap/images/index-services.png"/>
	  </div>
	  <div class="navigation_bottom">
	   		<ul>
	   			<li v-for="(item,index) in items" key="item.id">
	   				<router-link to="/">
	   					<div class="navigation_bottom_one">
	   						<img :src="item.images"/>
	   					</div>
	   					<div class="navigation_bottom_two">{{item.context}}</div>
	   				</router-link>
	   			</li>
	   		</ul>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'Navigation',
  data(){
  	return{ 		
  		items:[
  			{images:'https://m.zuipin.cn/wap/images/v8/ic_ziyinzishou.png',context:'自饮助手'},
  			{images:'https://m.zuipin.cn/wap/images/v8/ic_slzs.png',context:'送礼助手'},
  			{images:'https://m.zuipin.cn/wap/images/v8/ic_ppg.png',context:'品牌馆'},
  			{images:'https://m.zuipin.cn/wap/images/v8/ic_mjg.png',context:'名匠馆'}
  		]
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation{
	width: 100%;
	height: 1.37rem;
	background: #f4f4f4;	
	.navigation_top{
		width: 100%;
		height: 0.35rem;
		background: #FFFFFF;
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	
	}
	.navigation_bottom{
		width: 100%;
		height: 0.84rem;
		background: #FFFFFF;
		margin: 0.1rem 0 0.1rem 0;
		ul{
			display: flex;
			justify-content: space-around;
			li{
				width: 25%;
				text-align: center;
				a{
					display:block;
					.navigation_bottom_one{
						margin:0.18rem 0 0.08rem 0;
						img{
							display: block;
							width: 0.3rem;
							height: 0.3rem;
							margin-left:0.35rem;
						}
					}
					.navigation_bottom_two{
						color: #666;
						font-size: 0.14rem;
					}
				}
			}
		}
	}
}
</style>
