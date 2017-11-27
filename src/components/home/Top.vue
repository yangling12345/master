<template>
  <div class="top">
  		<div class="top_top"></div>
   		<div class="new_wrapper">
	   		<h3>{{message}}</h3>
	   		<ul>
	   			<li><img class="new_Img" :src="newData[0]"/></li>
	   			<li class="new_text new_text_one">{{newData[1]}}</li>
	   			<li class="new_oImg_text"><img class="new_oImg" :src="newData[2]"/></li>
	   			<li class="new_text">{{newData[3]}}</li>
	   			<li class="new_Img_text"><img class="new_Img" :src="newData[4]"/></li>
	   		</ul>
	   	</div>
	   	<div class="top_img">
	   		<div class="top_img_one">
	   			<router-link class="link" to="/Detail"><img class="link_anhui" :src="images[0]"/></router-link>
	   			<router-link class="link" to="/Detail"><img class="link_wuyi" :src="images[1]"/></router-link>
	   		</div>
	   		<div class="top_img_two">
	   			<router-link to="/Detail"><img :src="images[2]"/></router-link>
	   			<router-link to="/Detail"><img :src="images[3]"/></router-link>
	   			<router-link to="/Detail"><img :src="images[4]"/></router-link>
	   		</div>
	   		<div class="top_img_three">
	   			<router-link to="/Detail"><img :src="images[5]"/></router-link>
	   			<router-link to="/Detail"><img :src="images[6]"/></router-link>
	   			<router-link to="/Detail"><img :src="images[7]"/></router-link>
	   		</div>
	   	</div>
	   	<div class="zuipin_context">
	   		
		   	<div class="zuipin">
		   		<div class="zuipn_one">
		   			<span>{{context[0]}}</span>
		   			<span class="ps">{{context[1]}}</span>
		   		</div>
		   		<div class="zuipn_two">
		   			<!--<div class="swiper-container news_item_right swiper-container-vertical">
				        <div class="swiper-wrapper" style="transform: translate3d(0px, -80px, 0px); transition-duration: 0ms;">
				            <div class="swiper-slide" v-for="(ele,index) in eles" :key="ele.id" style="height: 20px;">
				            	<p>{{ele.context}}</p>
				            </div>
				            
				            
				        </div>
				    </div>-->
		   		</div>
		   	</div>
	   	</div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data(){
  	return{
  		items:[],
  		message:"TOP8茶叶类目",
  		newData:[
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png",
  			"品八大茗茶",
  			"https://m.zuipin.cn/wap/images/v8/center_lazy.png",
  			"享闲雅之意",
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png"
  		],
  		images:[
  			"/static/img/安溪铁观音.jpg",
  			"/static/img/大红袍.jpg",
  			"/static/img/正山小种.jpg",
  			"/static/img/金骏眉.jpg",
  			"/static/img/福鼎白茶.jpg",
  			"/static/img/普洱.jpg",
  			"/static/img/广东单枞.jpg",
  			"/static/img/龙井.jpg"
  		],
  		context:["醉品","新闻"],
  		eles:[
  			{context:"继上个月首轮醉品中国茶品牌集成柜招商大会引爆全国14城之后，5月26日，茶帮通品牌集成柜巡回招商会暨中国品质产区茶+大师茶全国合伙人订货会再度发酵，太原、长沙、西安、南宁、菏泽五站再次取得圆满成功！茶"},
  			{context:"8月17日，国内首创茶业新零售M2O模式醉品茶集全国招商会在厦门召开，来自全国各地的意向加盟商奔赴现场参加大会。到场的来宾参观了醉品集团总部及醉品茶集M2O厦门直营体验馆。会议上，醉品集团CEO叶翱、"},
  			{context:"2017年7月5日，58企服与醉品集团正式签订企业客户服务战略合作协议，强强联合全面开展企业服务新时代。此番合作，不仅是醉品集团与58企服基于双方大数据平台、用户体系、互联网经验及领域专业性的相互支持"},
  			{context:"继上个月首轮醉品中国茶品牌集成柜招商大会引爆全国14城之后，5月26日，茶帮通品牌集成柜巡回招商会暨中国品质产区茶+大师茶全国合伙人订货会再度发酵，太原、长沙、西安、南宁、菏泽五站再次取得圆满成功！茶"},
  			{context:"8月17日，国内首创茶业新零售M2O模式醉品茶集全国招商会在厦门召开，来自全国各地的意向加盟商奔赴现场参加大会。到场的来宾参观了醉品集团总部及醉品茶集M2O厦门直营体验馆。会议上，醉品集团CEO叶翱、"}
  		]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top{
	.top_top{
		width: 100%;
		height: 0.1rem;
		background:#f4f4f4 ;
	}
	.new_wrapper{
		width:100%;
		height:0.665rem;
		/*background:red;*/
		text-align: center;
		overflow: hidden;
		h3{
			color: #424242;
			font-size: 0.16rem;
			margin: 0.16rem 0 0.06rem 0;
		}
		ul{
			display: flex;
			/*background: brown;*/
			li{
				font-size:0.12rem;
				color: #999;
				img{
					display: block;
				}
				.new_Img{
					width: 1.1275rem;
					height: 0.0375rem;
					margin-top: 0.04rem;
				}
				.new_oImg{
					width: 0.095rem;
					height: 0.09rem;
					/*margin: 0 2px 0 2px;*/
				}
			}
			.new_oImg_text{
				margin: 0 0.04rem 0 0.04rem;
			}
			.new_text_one{
				margin-left: 0.06rem;
			}
			.new_Img_text{
				margin-left: 0.06rem;
			}
		}
	},
	.top_img{
		.top_img_one{
			height: 1.30rem;
			border-top: 1px solid #e6e6e6;
			.link:nth-child(1){
				border-right: 1px solid #e6e6e6;
			}
			.link{
				float: left;
				.link_anhui{
					display: block;
					width: 2.50rem;
					height: 1.30rem;
				}
				.link_wuyi{
					display: block;
					width: 1.23rem;
					height: 1.30rem;
				}
			}
		}
		.top_img_two{
			height: 1.30rem;
			border-top: 1px solid #e6e6e6;
			a{
				display:block;
				float: left;
				img{
					display: block;
					width: 1.23rem;
					height: 1.30rem;
				}
			}
			a:nth-child(2){
				border-left: 1px solid #e6e6e6;
				border-right: 1px solid #e6e6e6;
			}
		}
		.top_img_three{
			height: 1.30rem;
			border-top: 1px solid #e6e6e6;
			a{
				display:block;
				float: left;
				img{
					display: block;
					width: 1.23rem;
					height: 1.30rem;
				}
			}
			a:nth-child(2){
				border-left: 1px solid #e6e6e6;
				border-right: 1px solid #e6e6e6;
			}
		}
	}
	.zuipin_context{
		width: 100%;
		/*height: 0.64rem;*/	
		height: 1.1rem;	
		background: #f4f4f4;
		overflow: hidden;	
		.zuipin{
			width: 100%;
			height: 0.44rem;
			margin: 0.1rem 0 0.1rem 0;
			background: #FFFFFF;
	/*		line-height:0.44rem;*/
			.zuipn_one{
				float:left;
				margin:0.12rem 0 0 0.1rem;
				span{
					display: block;
					font-size: 0.18rem;
					float: left;
				}
				.ps{
					  background-color: #ff3700;
					  border-radius: 0 4px 4px 4px;
					  color: #fff;
				}
			}
			.zuipn_two{
				float:left;
			}
		}
	
	}
	
}
</style>
