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
  	</main>
  </div>
</template>

<script src="../assets/js/details.js">

</script>

<style scoped lang="scss" src="../assets/scss/details.scss">


</style>
