<template>
	<div id="self">
		<header>
			<div class="use">
				<p>
					<a href="#">
						<a href="#"><img src="../assets/img/old_v0.png"/></a>
					</a>
					<a href="#" class="telphone">{{user.mobile}}</a>
					<a href="#">签到送好礼</a>
				</p>
				<p>
					<a href="#"><img src="../assets/img/1517027396.png"/></a>
					会员码
				</p>
			</div>
			<ul>
				<li><a href="#">积分<span>{{user.jf}}</span></a></li>
				<li><a href="#">余额<span>{{parseInt(user.money)}}</span></a></li>
				<li><a href="#">优惠券<span>{{user.coupon_num}}</span></a></li>
				<li><a href="#">礼品<span>{{user.gift_num}}</span></a></li>
			</ul>
		</header>
		
		<section>
			<div class="one">
				<a href="#">
					<span><span class="iconfont icon-dingdan">
</span>我的订单</span>
					<span>全部订单</span>
				</a>
				<ul>
					<li><a href="#"><span class="iconfont icon-gerenzhongxindingdandaifukuan"></span>待付款</a></li>
					<li><a href="#"><span class="iconfont icon-wodedaifahuo3dtouchshangpinxiangqing"></span>待发货</a></li>
					<li><a href="#"><span class="iconfont icon-wodedaishouhuo"></span>待收货</a></li>
					<li><a href="#"><span class="iconfont icon-31daipingjia"></span>待评价</a></li>
					<li><a href="#"><span class="iconfont icon-tuihuanhuo"></span>退换货</a></li>
				</ul>
			</div>
			<div class="two">
				<a href="#">
					<span><span class="iconfont icon-huiyuanzhongxin"></span>会员中心</span>
					<span>享等级特权</span>
				</a>
				<a href="#">
					<span><span class="iconfont icon-qiyefuwu"></span>企业购</span>
					<span></span>
				</a>
				<a href="#">
					<span><span class="iconfont icon-zaixiankefu"></span>在线客服</span>
					<span></span>
				</a>
			</div>
		</section>
		
		<footer>
			
		</footer>
	</div>
</template>

<script src="./js/self.js">
	
</script>

<style scoped lang="scss" src="./sass/self.scss">
	
</style>