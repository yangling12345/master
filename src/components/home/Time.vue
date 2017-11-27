<template>
  <div class="time">
  		<div class="sz"><img src="https://m.zuipin.cn/wap/images/ic/time.png"/></div>
  		<h2>限时特价</h2>
  		<h3>总有你想不到的低价</h3>
  		<div class="timeshow">
  			<span class="date days"></span>
  			<span class="code">天</span>
  			<span class="date hours"></span>
  			<span class="code">时</span>
  			<span class="date minutes"></span>
  			<span class="code">分</span>
  			<span class="date seconds"></span>
  		</div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  data(){
  	return{
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.time{
	width: 100%;
	height: 0.585rem;
	background: burlywood;
	/*line-height: 0.585rem;*/
	display: flex;
	.sz{
		margin:0 10px;
		img{
			width: 0.2rem;
			height: 0.2rem;
		}
	}
	h2{
		font-size: 0.18rem;
		color: #ff3700;
		font-weight: normal;
    font-style: italic;
    line-height: 0.585rem;
	}
	h3{
		font-size: 0.12rem;
		color:#999;
		line-height: 0.585rem;
	}
	.timeshow{
		margin-left: 10px;
		span{
			display: block;
			float: left;
			width: 0.2rem;
			height: 0.16rem;
			line-height:0.16rem ;
			margin-top: 22px;
			text-align: center;		
		}
		.date{
			background: #5c5c5c;			
		}
		.code{
			font-size: 0.12rem;
		}
	}
}
</style>
