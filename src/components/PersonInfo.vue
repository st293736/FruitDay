<template>
	<div id="personInfo">
		<div class="nav-header">
			<div class="header">
				<router-link to="/self"><i class="iconfont">&#xe682;</i></router-link>
				<div class="person-title" >
					个人信息
				</div>
			</div>
		</div>
		<section>
			<div class="flex">
				
			</div>
			<div class="person-name">
				<div class="left">
					昵称
				</div>
				<div class="right" v-model="Info.mobile" >
					{{Info.mobile}}
				</div>
			</div>
			<div class="member">
				<div class="left" >
					会员等级
				</div>
				<div class="right">
					<img src="../assets/img/imgS/old_v0.png"/>
				</div>
			</div>
			<div class="sex">
				<div class="left">
					性别
				</div>
				<div class="right" v-model="Info.sex">
					{{Info.sex}}
				</div>
			</div>
			<div class="member">
				<div class="left">
					生日
				</div>
				<div class="right" >
					保密
				</div>
			</div>
			<div class="address-admin">
				<router-link to="/">
					<div class="left">
						地址管理
					</div>
					<div class="right">
						<i class="iconfont">&#xe840;</i>
					</div>
				</router-link>
			</div>
		</section>
		<footer>
			<div class="logout" @click="logOut()">
				退出登录
			</div>
		</footer>
	</div>
	
</template>

<script src="../assets/js/personInfo.js">
</script>

<style scoped lang="scss">
	@import "../assets/scss/personInfo.scss";
	@import "../assets/iconfont/iconfont.css";
</style>