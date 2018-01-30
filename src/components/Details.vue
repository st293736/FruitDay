<template>
  <div class="details">
  	<div class="top">
  		<router-link :to="{name:'Home'}">
  			<i class="iconfont icon-fanhui o"></i>
  		</router-link>
  		<div class="top_c">
  			<div class=" commodity aa">商品</div>
  			<div class="particulars aa">详情</div>
  			<div class="evaluate aa">评价</div>
  		</div>
  		<i class="iconfont icon-msnui-more t"></i>
  	</div>
  	<main class="mai">
  		<div class="referral">
  			<mt-swipe :auto="4000">
			  <mt-swipe-item  v-for="trtr in tu">
			  	<img :src="trtr.image" alt="" />
			  </mt-swipe-item>
			</mt-swipe>
  			<div class="content">
  				<h2>{{lists.product_name}}</h2>
  				<p>{{lists.product_desc}}</p>
  				<div class="spi">
  					<span>￥</span><i>{{lists.price}}</i>
  				</div>
  				<div class="bao">
  					<a  class="con_L" v-for="tt in twos">{{tt.volume}}<span>明日达</span></a>
  				</div>
  				<div class="zk">{{zk.sendTimeMsg}}</div>
  				<div class="dg">{{lists.op_weight}}</div>
  			</div>
  		</div>
  		<div id="sendTo">
  			<span>送至</span>
  			<i class="iconfont icon-dizhi"></i>
  			<a href="javascript:;"></a>
  		</div>
  		<div class="exchange">
  			<i class="iconfont icon-zhengque"></i><span>48小时退换货</span>
  			<i class="iconfont icon-zhengque"></i>
  			<span>全程冷链</span>
  			<i class="iconfont icon-zhengque"></i>
  			<span>果园标准</span>
  			<i class="iconfont icon-zhengque"></i>
  			<span>全球直采</span>
  		</div>
  		<div class="PJ">
  			<div class="PJ_top">
  				<span>评价({{PingJ.total}})</span>
				<div class="PJ_div2">
					<span>{{gd}}%</span>
					好评<i class="iconfont icon-xiangyou"></i>
				</div>
  			</div>
  			<div class="PJ_bottom">
  				<ul>
  					<li v-for="ss in JuTi">
  						<p class="p1">
  							<!-- <img :src="ss.images" alt=""> -->
  							<img :src="ss.userface" alt="">
  							<span>{{ss.user_name}}</span>
  							<i>{{ss.time}}</i>
  						</p>
  						<p class="p2">
  							<span class="p2_sp1">口感{{ss.star_eat}}</span>
  							<span class="p2_sp2">颜值{{ss.star_show}}</span>
  						</p>
  						<p class="p3">
  							<i>{{ss.content}}</i>
  							<!-- <img :src="ss.userface" alt=""> -->
  							<img :src="ss.images" alt="">
  						</p>
  					</li>
  				</ul>
  				<div class="anniu">查看全部评论</div>
  			</div>
  		</div>
  	</main>
  	<div class="bottom">
  		<div class="bottom_left">
  			<p>
  				<i class="iconfont icon-03"></i>
  			</p>
  		</div>
  		<div class="bottom_right">
  			<span>明日达</span>
  			加入购物车
  		</div>
  	</div>
  </div>
</template>

<script src="../assets/js/details.js">

</script>

<style scoped lang="scss" src="../assets/scss/details.scss">


</style>
