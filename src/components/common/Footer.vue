<template>
  <div class="footer">
		  <ul>
		    <li>
		    	<router-link active-class="active" to="/">
		    		
		    		<span><i class="iconfont icon-shouye1"></i></span>
		    		<p>首页</p>
		    	</router-link>
		    </li>
		    <li>
		    	<router-link active-class="active" to="/class">
			    	<span><i class="iconfont icon-msnui-cate"></i></span>
			    	<p>分类</p>
		    	</router-link>
		    </li>
		    <li>
		    	<router-link active-class="active" to="/cart">
			    	<span><i class="iconfont icon-gouwuche1"></i></span>
			    	<p>购物车</p>
		    	</router-link>
		    </li>
		    <li>
		    	<router-link active-class="active" to="/my">
			    	<span><i class="iconfont icon-tubiaozhizuomoban"></i></span>
			    	<p>我的</p>
		    	</router-link>
		    </li>
		  </ul> 		
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    	
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.footer{	
			width: 100%;
			height: 0.44rem;
			background: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
			border-top: 1px solid #d9d9d9;
			z-index: 100;
			ul{
				display: flex;
				justify-content: space-around;
				li{
					width: 25%;
					text-align: center;
					a{
						display: block;					
						span{
							display:block;
							margin: 0.03rem 0 0.03rem 0;
							.iconfont{
								display:block;
								font-size: 0.21rem;
								color: #7f7f7f;
							}
						}
						p{
							font-size: 0.13rem;
							color: #7f7f7f;
						}
					}
					
				}
			}
	}
</style>
