<template>
  <div class="hotreview">
  	<div class="hotreview_hotreview"></div>
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
   	<div class="hotreview_container">
   		<div ref="container" class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="(item,index) in items" :key="item.id">
			        	<ul>
			        		<router-link to="/detae">
			        			<li class="item_url_context"><img class="item_url" :src="item.url"/></li>
			        			<li class="item_text">{{item.text}}</li>
			        			<li class="item_src_context">
			        				<img class="item_src" :src="item.src"/>
			        				<span class="item_context">{{item.context}}</span>
			        			</li>
			        			<li class="item_title_price">
			        				<p>{{item.title}}</p>
			        				<span class="item_price">{{item.price}}</span>
			        			</li>			        			
			        		</router-link>
			        	</ul>
			        </div>
			    </div>		    
			</div>
   	</div>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from 'Swiper'

export default {
  name: 'Hotreview',
  data(){
  	return{
  		items:[],
  		message:"热评产品",
  		newData:[
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png",
  			"口碑精选",
  			"https://m.zuipin.cn/wap/images/v8/hot_xin.png",
  			"你的好茶",
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png"
  		]
  	}
  },
  methods:{
  	hotreView(){
  		const mySwiper = new Swiper('.swiper-container',{
				slidesOffsetBefore : 100,
				spaceBetween : 20
			})
  	},
  	dataList(){
  		let that = this;
  		axios.get('/static/hotreview.json')
  		.then(function(res){
  			console.log(res.data.dataList)
  			that.items = res.data.dataList
  		})
  		.catch(function(error){
  			console.log(error)
  		})
  	}
  },
  created(){
  	this.hotreView()
  	this.dataList()
  },
   updated(){
	new Swiper(this.$refs.container,{
		   slidesOffsetBefore : 1,
//				spaceBetween : 20
//			loop:true
	})
 }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotreview{
	.hotreview_hotreview{
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
					width: 1.2375rem;
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
	}
	.hotreview_container{
		width: 100%;
		/*height: 3.1rem;*/
		height: 3rem;
		/*height: 5.1rem;*/
		.swiper-container{
			.swiper-wrapper{
				width: 1.4rem;
				/*height: 2.8rem;*/
				/*background: red;*/
				.swiper-slide{
					border: 1px solid #e6e6e6;
					height: 2.8rem;
					margin-left:0.1rem ;
					ul{
						.item_url_context{
							margin: 15px auto;
						}
						.item_title_price{
						  width: 92%;
							margin: 0 auto;
							p{
								float: left;
								font-size: 0.12rem;
								width: 0.7rem;
						    white-space: nowrap;
						    text-overflow: ellipsis;
						    overflow: hidden;
						    color: #333;
							}
							.item_price{
								display: block;
								float: left;
								font-size: 0.12rem;
								color: #c00000;
							}
							
						}
						.item_text{					
							color:#666;
							font-size: 0.12rem;
							margin-top: 0.2rem;
							width: 90%;
							margin: 0 auto;
					    line-height: 1.5;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 5;
					    overflow: hidden;
						}
						.item_src_context{
							width: 90%;
							margin: 0.06rem auto;
							overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    margin-left: .08rem;
					    line-height: 1.2;
					    .item_src{
					    	display: block;
					    	float: left;
					    	width: 0.1rem;
					    	height: 0.1rem;
					    }
					    .item_context{
					    	float: left;
					    	display: block;
					    	font-size: 0.12rem;
					    	margin-left: 0.05rem;
					    	color: #999;
					    }
						}
						li{
							.item_url{
								display: block;
								width: 1.38rem;
								height: 1.1039rem;
							}
						}
					}
				}
			}
		}
	}
	
}
</style>
