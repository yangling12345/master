<template>
  <div class="class">
   	<v-classheader></v-classheader>
   	<v-footer></v-footer>
   	<div class="search_input">
   		<div class="seach">
   			<input type="search" placeholder="搜索您想要的产品" /><button><i class="iconfont icon-search"></i></button>
   		</div>
   	</div>
   	<div class="cha">
   		<div class="wulongcha">
   			<div class="wu">{{fenlei[0]}}</div>
   			<div class="item_ps1">
	   			<router-link v-for="(item,index) in wulongcha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   		<div class="hongcha wulongcha">
   			<div class="hong wu">{{fenlei[1]}}</div>
   			<div class="item_ps2 item_ps1">
	   			<router-link v-for="(item,index) in hongcha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   		<div class="lvcha wulongcha">
   			<div class="lv wu">{{fenlei[2]}}</div>
   			<div class="item_ps3 item_ps1">
	   			<router-link v-for="(item,index) in lvcha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   		<div class="heicha wulongcha">
   			<div class="hei wu">{{fenlei[3]}}</div>
   			<div class="item_ps4 item_ps1">
	   			<router-link v-for="(item,index) in heicha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   		<div class="baicha wulongcha">
   			<div class="bai wu">{{fenlei[4]}}</div>
   			<div class="item_ps5 item_ps1">
	   			<router-link v-for="(item,index) in baicha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   			</div>
   		</div>
   		<div class="chaju">
   			<div class="cj">{{fenlei[5]}}</div>
   			<div class="item_pscj">
	   			<router-link v-for="(item,index) in chaqi" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   		<div class="huacha">
   			<div class="hua">{{fenlei[6]}}</div>
   			<div class="item_ps7">
	   			<router-link v-for="(item,index) in huacha" :key="item.id" to="/detail">
	   				<span><img :src="item.images"/></span>
	   				<p>{{item.text}}</p>
	   			</router-link>
   			</div>
   		</div>
   </div>
  </div>
</template>

<script>
import Classheader from './Classheader.vue'
//import Swiper from '../../../static/swiper-3.4.2.min.js'
export default {
  name: 'Class',
  data(){
  	return{
  		wulongcha:[
  			{images:"/static/img/0001.jpg",text:"安溪铁观音"},
  			{images:"/static/img/0002.jpg",text:"武夷岩茶"},
  			{images:"/static/img/0003.jpg",text:"台湾高山茶"},
  			{images:"/static/img/0004.jpg",text:"广东单枞"},
  			{images:"/static/img/0005.jpg",text:"漳平水仙"},
  			{images:"/static/img/0006.jpg",text:"其他乌龙茶"}
  		],
  		hongcha:[
  			{images:"/static/img/0005.jpg",text:"金骏眉"},
  			{images:"/static/img/0006.jpg",text:"正山小种"},
  			{images:"/static/img/0007.jpg",text:"祁门红茶"},
  			{images:"/static/img/0008.jpg",text:"云南滇红"},
  			{images:"/static/img/0001.jpg",text:"英德红茶"},
  			{images:"/static/img/0002.jpg",text:"锡兰红茶"},
  			{images:"/static/img/0003.jpg",text:"九曲红梅"},
  			{images:"/static/img/0001.jpg",text:"英德红茶"},
  			{images:"/static/img/0004.jpg",text:"其他红茶"}
  		],
  		lvcha:[
  			{images:"/static/img/0005.jpg",text:"龙井"},
  			{images:"/static/img/0006.jpg",text:"碧螺春"},
  			{images:"/static/img/0007.jpg",text:"黄山毛峰"},
  			{images:"/static/img/0008.jpg",text:"六安瓜片"},
  			{images:"/static/img/0001.jpg",text:"太平猴魁"},
  			{images:"/static/img/0002.jpg",text:"安吉白茶"},
  			{images:"/static/img/0003.jpg",text:"云南滇绿"},
  			{images:"/static/img/0004.jpg",text:"四川绿茶"},
  			{images:"/static/img/0001.jpg",text:"太平猴魁"}
  		],
  		heicha:[
  		  {images:"/static/img/0007.jpg",text:"黄山毛峰"},
  			{images:"/static/img/0005.jpg",text:"普洱茶"},
  			{images:"/static/img/0006.jpg",text:"安化黑茶"}
  		],
  		baicha:[
  		  {images:"/static/img/0007.jpg",text:"黄山毛峰"},
  			{images:"/static/img/0007.jpg",text:"福鼎白茶"},
  			{images:"/static/img/0008.jpg",text:"其他白茶"}
  		],
  		chaqi:[
  			{images:"/static/img/0009.jpg",text:"陶瓷茶具"},
  			{images:"/static/img/00010.jpg",text:"紫砂茶具"},
  			{images:"/static/img/00011.jpg",text:"玻璃茶具"},
  			{images:"/static/img/00012.jpg",text:"茶盘"},
  			{images:"/static/img/00013.jpg",text:"茶道配件"},
  			{images:"/static/img/00014.jpg",text:"铁艺"}
  		],
  		huacha:[
  			{images:"/static/img/00015.jpg",text:"茉莉花茶"},
  			{images:"/static/img/00016.jpg",text:"玫瑰花茶"},
  			{images:"/static/img/00017.jpg",text:"其他花茶"},
  		],
  		fenlei:["乌龙茶","红茶","绿茶","黑茶","白茶","茶器","花茶"]

  	}
  },
  components:{
  	'v-classheader':Classheader
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chaju{
			@extend %aa;
			.cj{
				@extend %bb;		
			}
			.item_pscj{
				@extend %cc;
				@extend %a:nth-child(3);
				@extend %a:nth-child(6);
				a{
					@extend %a;
					@extend %aaa;
					span{
						@extend %span;
						img{
							@extend %img;
						}
					}
					p{
						@extend %p;
					}
				}
			}
		}
		.huacha{
			height:220px;
			background:#f4f4f4;
			overflow:hidden;
			.hua{
				@extend %bb;
			}
			.item_ps7{
				@extend %cc;
				@extend %a:nth-child(3);
				/*@extend %a:nth-child(6);*/
				a{
					@extend %a;
					@extend %aaa;
					span{
						@extend %span;
						img{
							@extend %img;
						}
					}
					p{
						@extend %p;
					}
				}
			}
		}
%aa{
	height: 2.86rem;
	background:#f4f4f4;
	overflow:hidden;
}
%bb{
	text-align: center;
	font-size: 0.18rem;
	margin-top: 0.1rem;
	line-height:0.37rem ;
}
%cc{
	width: 100%;
	/*border-top: 0.01rem solid #e0e0e0;*/
	border-bottom: 0.01rem solid #e0e0e0;
		
}
%aaa{
	border-right: 0.01rem solid #e0e0e0;
	border-bottom: 0.01rem solid #e0e0e0;
	
}
%a{
	float: left;
	display:block;
	width: 33.15%;
	text-align: center;
	background: #FFFFFF;
}
%span{
	display: block;
	margin: 0.28rem 0 0.05rem 0;
}
%img{
	display: block;
	width: 0.55rem;
	height: 0.55rem;
	margin-left: 0.34rem;
}
%p{
	font-size:0.16rem ;
	color: #333;
	margin: 0 0 0.15rem 0;
}
%a:nth-child(3){
	border-right: none;
}
%a:nth-child(6){
	border-right: none;
}
%a:nth-child(9){
	border-right: none;
}
.class{
	.search_input{
		width: 100%;
		height: 0.5rem;
		border-bottom: 0.01rem solid #e0e0e0;
		margin-top: 0.44rem;
		position:relative;
		.seach{
			position: absolute;
			top: 0.08rem;
			left: 0.14rem;
			width: 3.45rem;
			height: 0.32rem;
			border: 0.01rem solid #ccc;
			border-radius: 5px;
			/*margin: 2px 0 0 2px;*/
			input{
				width: 2.47rem;
				height: 0.32rem;
				display: block;
				float: left;
				border: none;
				outline: none;
				font-size: 0.14rem;
				padding-left: 0.05rem;
				color: #999;
			}
			button{
/*				box-sizing:border-box;*/
				width: 0.60rem;
				height: 0.32rem;
				display: block;
				float: right;
				border: none;
				outline: none;
				background: linear-gradient(#fafafa, #f0f0f0);
				.iconfont{
					display: block;
					font-size: 0.2rem;
					color: #999;
				}
			}
		}
	}
	.cha{
		width: 100%;
		.wulongcha{
			@extend %aa;
			/*@extend %cc;*/
			.wu{
				@extend %bb;		
			}
			.item_ps1{
				@extend %cc;
				@extend %a:nth-child(3);
				@extend %a:nth-child(6);
				a{
					@extend %a;
					@extend %aaa;
					span{
						@extend %span;
						img{
							@extend %img;
						}
					}
					p{
						@extend %p;
					}
				}
			}
		}
		.hongcha{
			height: 405px;
			a{
				@extend %a;
				@extend %a:nth-child(9);
			}
		}
		.lvcha{
			height: 405px;
			a{
				@extend %a;
				@extend %a:nth-child(9);
			}
		}
		.heicha{
			height: 168px;
			a{
				@extend %a;
				@extend %a:nth-child(9);
			}
		}
		.baicha{
			height: 168px;
			a{
				@extend %a;
				@extend %a:nth-child(9);
			}
		}
		
	}

}
</style>
