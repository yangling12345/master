<template>
  <div class="list">
   		<div class="banner content">
   		    <router-link to="/"><img src="/static/img/zuipin-1.jpg" alt="" /></router-link>	
   		</div>  		
   		<div>
   				<div class="container">
	   				<ul>
							<li><router-link to="/Detail" active-class="active">{{dataList[0]}}</router-link></li>
							<li><router-link to="/Fresh" active-class="active">{{dataList[1]}}</router-link></li>
							<li><router-link to="/Price" active-class="active">{{dataList[2]}}</router-link></li>
							<li><router-link to="/Sift" active-class="active">{{dataList[3]}}<i class="iconfont icon-bsaixuanpress"></i></router-link></li>
						</ul>	
					</div>
   		</div>	
  </div>
</template>

<script>
export default {
		name: 'list',
		data(){
			return{
						dataList:["销量","新品","价格","筛选"]
			}
	 }
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">	
		.list {
			height: 100%;
			width: 100%;
			.banner {
				width: 3.75rem;
				margin-top: 0.44rem;
				img {
					width: 100%;
				}
			}
			.container {
				width: 100%;
				background: #fff;
				height: 0.4rem;
				line-height: 0.4rem;
				border-top: 1px solid #e0e0e0;
				ul {
					display: flex;
					justify-content: space-around;
					align-content: center;
					li{
						
							a {
								color: #666;
								font-size: 0.14rem;
							}
							.iconfont {
								font-size: 0.12rem;
								color: #ccc;
							}
					}
				}
			}
		}
</style>
