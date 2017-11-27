<template>
	<header class="bar bar-nav header">
		<router-link to="/" class="iconfont icon-jiantouarrowhead7 hd_left ">{{mes}}</router-link>
		<h1 class="title">{{message}}</h1>
	</header>

</template>

<script>
	export default {
		name: 'header', //组件拥有name属性，不设置不影响功能，但是设置了后，vue在查找组件时更快速高效
		data() {
			return {
				mes: "返回",
				message: "账号登录"
			}
		}
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index:100;
		height: 0.44rem;
		width: 100%;
		background: #282828;
		display: flex;
		justify-content: center;
		line-height: 0.44rem;
		h1 {
			font-size: 0.18rem;
			color:#c6c6c7;
		}
		.hd_left {
			position: fixed;
			left: 0.15rem;
			top: 0;
			color:#c6c6c7;
		}
	}
</style>