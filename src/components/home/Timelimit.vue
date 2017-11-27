<template>
  <div class="timelimit">
	   	<div ref="container" class="swiper-container container">
				  <div class="swiper-wrapper wrapper">
				      <router-link to="/detae" class="swiper-slide slide" v-for="(item,index) in items" :key="item.id">
				        	
				        		
				        			<div class="item_url_context"><img class="item_url" :src="item.url"/></div>
				        			<div class="item_text">{{item.text}}</div>
				        			<div class="item_title_price">
				        				<p>{{item.price}}</p>
				        				<span class="item_title">{{item.title}}</span>
				        			</div>			        			
				        		
				        	
				      </router-link>
				  </div>		    
			</div>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from 'Swiper'

export default {
  name: 'Timelimit',
  data(){
  	return{
  		items:[]
  	}
  },
  methods:{
//	hotreView(){
//		const mySwiper = new Swiper('.swiper-container',{
//				slidesOffsetBefore : 100,
//				spaceBetween : 20
//			})
//	},
  	dataList(){
  		let that = this;
  		axios.get('/static/timelimit.json')
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
//	this.hotreView()
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
/*.slide{
	width: 1.2114rem;
	height: 2.1rem;
}*/
.timelimit{
	width: 100%;
	.container{
		.wrapper{
			.slide{
				width: 1.2114rem;
				height: 2.1rem;
				.item_url_context{
					img{
						display: block;
						width: 1.2rem;
						height: 1.2rem;
					}
				}
				.item_text{
					font-size: 0.13rem;
					color: #333;
				}
				.item_title_price{
					p{
						float: left;
						font-size: 0.14rem;
						color: #c00000;
					}
					.item_title{
						float: left;
						font-size: 0.13rem;
						color: #adadad;
						/*margin-left: 5px;*/
						text-decoration:line-through
					}
				}
			}
		}
	}
}
/*.timelimit{
	height: 2.21rem;
	background: #F4F4F4;
	.swiper-container{
		background: #FFFFFF;
		.swiper-wrapper{
			/*width: 1.2114rem;*/
			/*margin-left: 15px;
			.slide{
				width: 1.2114rem;
			}*/
			/*.swiper-slide{
/*				width: 1.2114rem;*/
				/*height: 2.1rem;	
				margin-right: 15px;
				width: 1.2114rem;
				ul{
					width: 1.2114rem;
					a{		*/
						/*background: red;*/
						/*display: block;
						width: 1.2114rem;
						height: 2.1rem;	
						overflow: hidden;			
						.item_url_context{
							margin:0.15rem 0 0.05rem 0;
							img{
								display: block;
								width: 1.2rem;
								height: 1.2rem;
							}
						}*/
						/*.item_text{
							font-size: 0.13rem;
							color: #333;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 2;
					    overflow: hidden;
					    line-height: 0.18rem;
						}
						.item_title_price{
							margin: 10px 0 0 0;
							p{
								float: left;
								font-size: 0.14rem;
								color: #c00000;
							}
							.item_title{
								float: left;
								font-size: 0.13rem;
								color: #adadad;
								margin-left: 5px;
								text-decoration:line-through
							}*/
						/*}
					}
				}
		  }
		}*/
	/*}*/
/*}*/
</style>
