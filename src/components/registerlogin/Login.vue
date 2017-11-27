<template>
	<div class="register">
		<v-header></v-header>
		<div class="zuipin clearfix">
			<div class="l-img "><img src="https://m.zuipin.cn/wap/images/V7_logo.png"></div>

			<div class="login_method flex">
				<p class="flex_item">密码登录</p>
				<router-link to="/Regie"><p class="flex">短信登录</p></router-link>
			</div>

			<form action="" class="login_wrapper">
				
				<div class="tel form-wrap">
					<input type="text" placeholder="手机号码／邮箱" class="tel-text" id="tel-id">
				</div>
				<div class="password form-wrap">
					<input type="password" placeholder="登录密码" id="pwd" class="password-text">
					<a class="view_pwd" href="javascript:void(0);"><i class="iconfont icon-yincangmima"></i></a>
				</div>
				<div class="bind">
					<span class="bind-btn transtion bind-btn-enabled">
                      	<button class="btn">立即登录</button>  
                    </span>
				</div>
				<div class="otherLogin flex">
					<span class="message-login flex-item">
                      	<router-link to="/Login">立即注册</router-link> 
                    </span>
					<span class="flex-item forget">
                       	 忘记密码
                    </span>
				</div>
				
			</form>

		</div>

	</div>

</template>

<script>
	import AppHeader from './header.vue'
	export default {
		name: 'register',
		data() {
			return {

			}
		},
		components: {
			'v-header': AppHeader
		}
	}
</script>

<style scoped lang="scss">
	.register{
		height: 100%;
		width: 100%;
		background: #fff;

	.zuipin {
		margin: 0.44rem 0 4rem;
		
		.l-img {
			width: 1.74rem;
			height: 0.3rem;
			margin: 0 auto;
			padding-top: 0.14rem;
			img {
				display: block;
				width: 100%;
			}
		}
		.login_method {
			display: flex;
			justify-content: space-around;
			width: 1.74rem;
			margin: 0.5rem auto 0.15rem;
			.flex_item {
				position: relative;
				color: #333;
				padding: 0.03rem;
			}
			.flex {
				color: #333;
				padding: 0.03rem;
			}
			.flex_item:after {
				content: '';
				width: 0.7rem;
				height: .02rem;
				position: absolute;
				background-color: #ff3600;
				bottom: -.08rem;
				left: -.05rem;
			}
		}
		.login_wrapper{
			
			text-align:center;
			margin:0 auto;
		input {
			width:3.35rem;
			text-indent: .1.5rem;
			height: .49rem;
			padding-left:0.2rem;
			margin:0.15rem 0 0;
			line-height: .1rem;
			border: 1px solid #e0e0e0;
			font-size: .1.5rem;
			color: #adadad;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			
		}	
		.btn{
			width:3.35rem;
			height: .49rem;
			background:#ff3600;
			color:#fff;
			    border-radius: 5px;
			margin-top:0.15rem;
			border:none;
		}
		.otherLogin{
			display:flex;
			width:3.35rem;
			margin-top:0.15rem;
			justify-content:space-around;
		a{
			color:#333;
			
		}	
		.forget{
			color:rgba(0, 0, 0, 0.68);
		}
		}
		}
		
		
	}		
		
	}
	
</style>