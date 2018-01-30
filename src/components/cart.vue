<template>
	<div id="box">
		<header>
			<a href="#" v-if="!showflag">
				<img src="../assets/img/imgS/to2.png"/>
			</a>
			<span>购物车</span>
			<a href="#" v-if="!showflag">编辑</a>
		</header>
		<section>
			<div class="one" v-if="showflag">
				<img src="../assets/img/imgS/cart_empty-172251d77c.png"/>
				<div class="text">还没找到心仪的商品吗？</div>
				<a href="#">去逛逛吧</a>
			</div>
			<div class="two" v-if="!showflag">
				<a href="#" class="addAress">
					<span>添加地址</span>
					<span></span>
				</a> 
				<ul>
					<p>
						<span>商品清单</span>
						<span>总重约<span class="totalWeight">{{weight}}</span>kg</span>
					</p>
					<li v-for="item in product.products" class="lis">
						<input type="checkbox" class="choise option" checked="checked"/>
						<div class="product">
							<a href="#"><img :src="item.photo"/></a>
							<a href="#" class="name">{{item.name}}</a>
							<p>
								<span class="zhiliang1">{{item.volume}}</span>
								<span class="zhiliang2">{{item.weight}}</span>kg
							</p>
							<p>
								<span>¥</span>
								<span class="price">{{item.price}}</span>
								<a href="#" class="time">{{item.delivery_tag}}</a>
							</p>
						</div>
						<div class="number">
							<p>
								<a href="#" class="minus" >-</a>
								<span class="num">{{item.qty}}</span>
								<a href="#" class="add">+</a>
							</p>
						</div>
					</li>
				</ul>
				<div class="closing">
					<p>
						<input type="checkbox" class="checkAll options" checked="checked"/><span>全选</span>
					</p>
					<p>
						<span>
							<span>合计：</span>
							¥<span class="money">{{price.toFixed(2)}}</span>
						</span>
						<a href="#">立即结算(<span class="sum">{{product.count}}</span>)</a>
					</p>
				</div>
			</div>
		</section>
		<div id="tilt"></div>
		<div id="hint">
			<p>
				确定要删除<span class="names">xxxx</span>？
			</p>
			<p>
				<a href="#" value="false" class="cls">取消</a>
				<a href="#" value="true" class="ok">确定</a>
			</p>
		</div>
		<div id="address">
			<p>
				<span class="iconfont icon-cuohao clos"></span>
				<span>收货地址</span>
				<span></span>
			</p>
			<a href="javascript:;">
				新增收货地址
			</a>
		</div>
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

<script src="../assets/js/cart.js">
	
</script>

<style scoped lang="scss" src="../assets/scss/cart.scss">

</style>