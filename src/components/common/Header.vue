<template>
  <div class="header">
			<ul>
				<li><img src="https://m.zuipin.cn/wap/images/logo.png"/></li>
				<li><router-link to="/"><i class="iconfont icon-fenlei4"></i></router-link></li>
			</ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
	width: 100%;
	height: 0.44rem;
	position: fixed;
	top: 0;
	left: 0;
	background: #ff3600;
	z-index: 100;
	ul{
		display:flex;
		justify-content: space-around;
		li{
			img{
				width: 1.5rem;
			}
			a{
				display: block;
				.iconfont{
					display: block;
					font-size: 0.26rem;
					color:#FFFFFF;
				}
			}
		}
		li:nth-child(1){
			margin: 0.06rem 0 0 0.9rem;
		}
		li:nth-child(2){
			margin: 0.1rem -0.15rem 0 0;
		}
	}
}


</style>
