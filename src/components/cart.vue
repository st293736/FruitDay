<template>
	<div id="box">
		<header>
			<a href="#" v-if="!showflag">
				<img src="../assets/img/to2.png"/>
			</a>
			购物车
			<a href="#" v-if="!showflag">编辑</a>
		</header>
		<section>
			<div class="one" v-if="showflag">
				<img src="../assets/img/cart_empty-172251d77c.png"/>
				<div class="text">还没找到心仪的商品吗？</div>
				<a href="#">去逛逛吧</a>
			</div>
			<div class="two" v-if="!showflag">
				<a href="#">
					<span>添加地址</span>
					<span></span>
				</a> 
				<ul>
					<p>
						<span>商品清单</span>
						<span>总重约<span class="totalWeight">{{weight}}</span>kg</span>
					</p>
					<li v-for="item in product.products">
						<input type="radio" class="choise option"/>
						<div class="product">
							<a href="#"><img :src="item.photo"/></a>
							<a href="#" class="name">{{item.name}}</a>
							<p>
								<span class="zhiliang1">{{item.volume}}</span>
								<span class="zhiliang2">{{item.weight}}kg</span>
							</p>
							<p>
								<span class="price">¥{{item.price}}</span>
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
					<input type="radio" class="checkAll options"/><span>全选</span>
				</p>
				<p>
					<span>
						<span>合计：</span>
						<span class="money">¥{{product.normal_price}}</span>
					</span>
					<a href="#">立即结算<span>({{product.count}})</span></a>
				</p>
			</div>
			</div>
		</section>
		<div id="tilt"></div>
		<div id="hint">
			<p>
				确定要删除XXXXX？
			</p>
			<p>
				<a href="#" value="false" >取消</a>
				<a href="#" value="true">确定</a>
			</p>
		</div>
	</div>
</template>

<script src="./js/cart.js">
	
</script>

<style scoped lang="scss" src="./sass/cart.scss">

</style>