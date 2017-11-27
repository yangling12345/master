<template>
	<div class="wrap">
		<header class="bar bar-nav header">
			<router-link to="/" class="iconfont icon-jiantouarrowhead7 hd_left "> {{mes}}</router-link>
			<h1 class="title">{{message}}</h1>
		</header>
		<div class="context">
			<p class="oImg"><img src="../../../static/img/zhucefuli_wap.png"/></p>
			<p class="reg">注册立享</p>
			<p class="price">300元</p>
			<p class="xj">现金券</p>
		</div>
		<div class="regist_wrapper">
			<mt-field label="手机号" class="phone" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			
			<mt-field label="图形验证码" class="imgCaptcha" placeholder="请输入图形验证码" v-model="imgCaptcha">
                <img :src="captchaSrc"  @click="getCaptchaSrc" height="45px" width="100px">
            </mt-field>
            
            <mt-field label="验证码" class="captcha" placeholder="请输入短信验证码" v-model="captcha">
                <mt-button type="primary" class="getCaptcha" @click="getCaptcha">获取验证码</mt-button>
            </mt-field>
            
            <mt-field label="密码" class="password" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="确认密码" class="rPassword" placeholder="请再次输入密码" type="password" v-model="rPassword"></mt-field>
			
			<!--<mt-field class="password" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>-->
			<router-link to="/my">				
				<mt-button class="btn" type="primary" @click="regSubmit" size="large">立即注册</mt-button>
			</router-link>
		</div>
		<div class="foot">
			点击 立即注册 即表示您同意醉品
			<router-link to="https://m.zuipin.cn/page/yhxywap">	
				<span>用户协议</span>
			</router-link>
			和
			<router-link to="https://m.zuipin.cn/page/yszcwap">
				<span>隐私政策</span>
			</router-link>
			
		</div>
	</div>

</template>

<script>
	import axios from "axios"
	import qs from "qs"
	export default {
		name: 'Register',
		data() {
			return {
				mes: "返回",
				message: "用户注册",
				phone:"",
		        imgCaptcha:"",
		        captcha:"",
		        password:"",
		        rPassword:"",
		        captchaSrc:"http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
			}
		},
		methods:{
			 getCaptchaSrc(){
		         this.captchaSrc="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
		     },
		      getCaptcha(){
		         //数据校验
		         if(this.imgCaptcha){
		
		         }
		         if(this.phone){
		
		         }
		         //获取短信验证码
		         this.$http.post(`/loho88/uc/mobile/register/code?captcha=${this.imgCaptcha}&mobile=${this.phone}`).then(res=>{
		             console.log(res.data)
		         })
		     },
			regSubmit(){
				var params = {
	                agreement:true,
	                captcha:this.captcha  ,
	                inputCaptcha:this.imgCaptcha ,
	                password:this.password,
	                repassword:this.rPassword,
	                username:this.phone
         		}
				console.log(qs.stringify(params))
				 this.$http.post("/loho88/uc/mobile/register",qs.stringify(params),{
	                headers:{
	                    "Content-type":"application/x-www-form-urlencoded"
	                }
                })
			}
		}
		

	}
</script>

<style scoped lang="scss">
.rPassword{
	border: 1px solid #e0e0e0;
		width: 90%;
		margin: 0 auto;
}
.password{
	border: 1px solid #e0e0e0;
		width: 90%;
		margin: 0 auto;
}
.captcha{
	border: 1px solid #e0e0e0;
		width: 90%;
		margin: 0 auto;
}
.imgCaptcha{
	border: 1px solid #e0e0e0;
	width: 90%;
	margin: 15px auto;
}
.regist_wrapper{
	.phone{
		border: 1px solid #e0e0e0;
		width: 90%;
		margin: 0 auto;
	}
	
	.btn{
		width: 90%;
		margin: 30px auto;
	}
	.password{
		border: 1px solid #e0e0e0;
		width: 90%;
		margin: 15px auto;
	}
}
.foot{
	font-size: 0.12rem;
	text-align: center;
	a{
		span{
			color:#ff3600 ;
		}
	}
}
.context{
	width: 100%;
	height: 60px;
	margin-top: 0.44rem;
	line-height: 0.6rem;
	p{
		font-size: 0.16rem;
		float:left;
	}
	.oImg{
		img{
			margin: -4px 8px 0 11px;
			width: 0.17rem;
			height: 0.185rem;
		}
	}
	.price{
		color: #ff3600;
	}
}
	
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 0.44rem;
		width: 100%;
		background: #282828;
		display: flex;
		justify-content: center;
		line-height: 0.44rem;
		h1 {
			font-size: 0.18rem;
			color: #c6c6c7;
		}
		.hd_left {
			position: fixed;
			left: 0.15rem;
			top: 0;
			color: #c6c6c7;
			font-size: 0.16rem;
		}
	}
	.zuipin-section {
		background-color: #fff;
		color: #999;
		margin-top: 0.44rem;
		.regist_form {
			width: 3.35rem;
			margin:0 auto;
			.password{
				position: relative;
				.icon-yincangmima{
					position: absolute;
					top: 0.8rem;
					right:0.15rem;
			    }
			}	
		}
	}
</style>