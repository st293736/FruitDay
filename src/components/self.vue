<template>
	<div id="self">
		<header>
			<div class="use">
				<p>
					<a href="#">
						<a href="#"><img src="../assets/img/imgS/old_v0.png"/></a>
					</a>
					<router-link to="/personInfo" class="telphone">{{user.mobile}}</router-link>
					<!--<a href="#" class="telphone">{{user.mobile}}</a>-->
					<a href="#">签到送好礼</a>
				</p>
				<p>
					<a href="#"><img src="../assets/img/imgS/1517027396.png"/></a>
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
        <ul>
            <router-link :to="{name:'Home'}" class="rl">
            <i class="iconfont icon-weibiaoti1"></i>
            <a href="javascript:;">首页</a>
          </router-link>
          <router-link :to="{name:'FenLei',params:{fid: 303}}" class="rl">
            <i class="iconfont icon-fenlei"></i>
            <a href="javascript:;">分类</a>
         </router-link>
         <router-link :to="{name:'cart'}" class="rl">
         	<em class="cartnum">{{$store.state.length}}</em>
            <i class="iconfont icon-03"></i>
            <a href="javascript:;">购物车</a>
         </router-link>
          <router-link :to="{name:'self'}" class="rl">
            <i class="iconfont icon-huiyuan"></i>
            <a href="javascript:;">我的果园</a>
          </router-link>
        </ul>
    </footer>
	</div>
</template>

<script src="../assets/js/self.js">
	
</script>

<style scoped lang="scss" src="../assets/scss/self.scss">
	
</style>