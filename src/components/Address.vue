<template>
	<div id="address">
		<div class="nav-header">
			<div class="header">
				<router-link to="/"><i class="iconfont">&#xe621;</i></router-link>
				<div class="goods-address">
					选择收货地址
				</div>
				<router-link to="#">新增地址</router-link>
			</div>
			<div class="search">
				<div class="box">
					<span><em>上海</em><i class="iconfont">&#xe61c;</i></span>
					<div class="search-address">
						<i class="iconfont">&#xe60e;</i>
						<input type="text" placeholder="请输入收货地址"/>
					</div>
				</div>
			</div>
		</div>
		<section>
			<div class="current-address">
				<h5>当前地址</h5>
				<div class="auto-address">
					<div class="local-address">
						北京市昌平区沙河镇沙河二毛	
					</div>
					<div class="reposition">
						<i class="iconfont">&#xe636;</i>
						<span>重新定位</span>
					</div>
				</div>
			</div>
			<div class="my-address">
				<h5>我的收货地址</h5>
				<h5>附近地址</h5>
			</div>
		</section>
	</div>
</template>

<script src="../assets/js/address.js">
	
</script>

<style lang="scss" scoped>
@import "../assets/scss/address.scss";
@import "../assets/iconfont/iconfont.css";
</style>