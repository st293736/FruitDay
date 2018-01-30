<template>
	<div id="login">
		<div class="nav-header">
			<div class="header">
				<router-link to="/"><i class="iconfont">&#xe682;</i></router-link>
				<div class="login-title" >
					手机号快捷登录
				</div>
			</div>
		</div>
		<section>
			<form action="" >
				<div class="phoneNum">
					<i class="iconfont">&#xe671;</i>
					<input type="number" class="phone" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="手机号" v-model="obj.username"/>
					<span v-if="obj.username.length < 11">
						获取验证码
					</span>
					<span v-if="obj.username.length == 11" class="bright" @click="getCode()">
						获取验证码
					</span>
				</div>	
				<div class="nodePass">
					<i class="iconfont">&#xe610;</i>
					<input type="text" class="nodecode" placeholder="短信验证码"/>
					<span class="code" v-model="code">
						{{code}}
					</span>
				</div>
				<p>首次用手机号登录将自动为您注册，并有豪礼相送</p>
				<button class="go" >登录</button>
				<div class="table">
					<div class="left">
						<router-link to="#">
							账号密码登录
						</router-link>
					</div>
					<div class="right">
						<router-link to="#">未收到验证码？</router-link>
					</div>
				</div>
			</form>
		</section>
	</div>
</template>

<script src="../assets/js/login.js">
</script>

<style lang="scss" scoped>
	@import "../assets/scss/login.scss";
	@import "../assets/iconfont/iconfont.css";
</style>