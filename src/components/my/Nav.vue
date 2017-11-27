<template>
	<div class="nav">
		<ul>
			<li v-for="(item,index) in datalist" :key="item.id">
				<router-link to="/">				
					<span>{{item.price}}</span>
					<p>{{item.text}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	name: 'Nav',
	data() {
		return {
			datalist:[
				{price:"0.00",text:"账户余额(元)"},
				{price:"0",text:"我的积分"},
				{price:"0",text:"红包个数"}
			]
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.nav{
		ul{
			display:flex;
			justify-content: space-around;
			text-align: center;
			li{
				width: 33.3%;
				padding: 0.12rem 0;
				a{
					display:block;
					/*border-right: 1px solid red;*/
					    border-right: 1px solid rgba(221, 221, 221, 0.5);
					span{
						display: block;
						font-size: 0.14rem;
						color: #ff3600;
						font-weight: bold;
					}
					p{
						font-size: 0.13rem;
						margin-top: 2px;
						color:#666 ;
					}
				}
			}
			li:nth-child(3){
				a{
					border:none;
				}
			}
		}
	}
</style>
