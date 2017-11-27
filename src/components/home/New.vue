<template>
  <div class="new">
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
   	<div class="new_list">
   			<div class="new_list_text" v-for="(item,index) in items" :key="item.id">
   					<ul>
		   				<router-link to="/detae">
		   						<li><img :src="item.url" /></li>
		   						<li>
		   							<div class="item_text">{{item.text}}</div>
		   							<p class="item_title">{{item.title}}</p>
		   							<span class="item_price">{{item.price}}</span>
		   						</li>
		   				</router-link>
   					</ul>
   				
   			</div>
   	</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'New',
  data(){
  	return{
  		items:[],
  		message:"新品首发",
  		newData:[
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png",
  			"茶界新品",
  			"https://m.zuipin.cn/wap/images/v8/center_lazy.png",
  			"新鲜直达",
  			"https://m.zuipin.cn/wap/images/v8/right_lazy.png"
  		]
  	}
  },
  methods:{
  	newdataList(){
  		let that = this;
  		axios.get("/static/new.json")
  		.then(function(res){
//			console.log(res.data.dataList);
  			that.items=res.data.dataList;
  			
  		})
  		.catch(function(error){
  			console.log(error)
  		})
  	}
  },
  created(){
  	this.newdataList()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.new{
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
	.new_list{
		width: 100%;
		.new_list_text{
			width: 3.55rem;
			height: 1.25rem;
			/*background: red;*/
			margin:0.1rem 0 0 0.09rem;
			ul{
				width: 100%;
				a{
					display:block;
					width: 100%;
					li{
						float:left;
						img{
							display: block;
							width: 1rem;
							height: 1rem;
						}
						.item_text{
							line-height: 1.5;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 2;
					    overflow: hidden;
							color: #333333;
							font-size: 0.14rem;
							margin: 0.1rem 0 0 0.1rem;
						}
						.item_title{
							color: #999;
							font-size: 0.13rem;
							line-height: 1.5;
    					overflow: hidden;
    					text-overflow: ellipsis;
    					white-space: nowrap;
							margin: 0.08rem 0 0 0.1rem;
						}
						.item_price{
							display: block;
							color: #c00000;
							font-size: 0.14rem;
							margin: 0.15rem 0 0 0.1rem;
						}
					}
					li:nth-child(1){
						width: 1rem;
						margin-top: 0.12rem;
					}
					li:nth-child(2){
						width: 2.35rem;
					}
				}
			}
		}
	}
}
</style>
