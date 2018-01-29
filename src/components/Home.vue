	<template>
	<div id="home-main">
		<header>
			<div class="position">
				<div class="logo">
					<img src="../assets/img/home/home_logo.png"/>
				</div>
				<router-link to="/address">
					<div class="address">
						<span>北京</span><i class="iconfont">&#xe61c;</i>
					</div>
				</router-link>
			</div>
			<div class="home-search">
				<i class="iconfont">&#xe60e;</i>
			</div>
		</header>
		<section>
			<div class="home-swiper">
				<mt-swipe :auto="4000">
				  <mt-swipe-item v-for="(item,index) in lunbo" :key="index"><router-link to="/"><img :src="item.image"/></router-link></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="home-activity">
				<div class="activity">
					<router-link to="/" v-for="(item,index) in activity" :key="index"><img :src="item.image"/></router-link>
				</div>
			</div>
			<div class="home-banner">
				<router-link to="/" v-for="(item,index) in banner" :key="index"><img :src="item.image"/></router-link>
			</div>
			<div class="home-hot">
				<div class="hot-title">
					<router-link to="/"><img src="../assets/img/home/home_hot.jpg"/></router-link>
				</div>
				<!--<div class="hot-show">
					<router-link to="/" v-for="(item,index) in hot" :key="index">
						<dl>
							<dt>
								<img :src="item.image"/>
							</dt>
							<dd>
								<h5>{{item.title}}</h5>
								<p>{{item.subtitle}}</p>
								<div class="price">
									<span>
										{{item.price}}/
										<em>{{item.volume}}</em>
									</span>
									<i class="addcart"></i>
								</div>
							</dd>
						</dl>
					</router-link>
				</div>-->
				<div class="hot-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in hotSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
			</div>
			<div class="home-new">
				<div class="new-title">
					<router-link to="/"><img src="../assets/img/home/home_new.jpg"/></router-link>
				</div>
				<div class="new-show">
					<router-link to="/" v-for="(item,index) in news" :key="index">
						<img :src="item.image"/>
					</router-link>	
				</div>
				<div class="new-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in newsSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
			</div>
			<!--精选-->
			<div class="home-handpick">
				<div class="handpick-title">
					<router-link to="/"><img src="../assets/img/home/home_handpick.jpg"/></router-link>
				</div>
				<div class="handpick-fruit">
					<router-link to="/"><img src="../assets/img/home/home_fruit.jpg"/></router-link>
				</div>
				<div class="fruit-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in fruitSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
				<div class="handpick-seafood">
					<router-link to="/"><img src="../assets/img/home/home_seafood.jpg"/></router-link>
				</div>
				<div class="seafood-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in seafoodSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
				<div class="handpick-meat">
					<router-link to="/"><img src="../assets/img/home/home_meat.jpg"/></router-link>
				</div>
				<div class="meat-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in meatSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
				<div class="handpick-fastfood">
					<router-link to="/"><img src="../assets/img/home/home_fastfood.jpg"/></router-link>
				</div>			
				<div class="fastfood-swiper">
					<div class="swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(item,index) in fastfoodSwiper" :key="index">
					    	<router-link to="/">
					    		<div class="img-box">
						    		<img :src="item.image"/>
					    		</div>
					    		<div v-if="item.banner_tag != '' " class="save">
					    			<em>{{item.banner_tag}}</em>
					    		</div>
								<div class="name">
									{{item.title}}
								</div>
					    		<div class="price">
					    			<span>
					    				¥{{item.price}}/
					    				<em>{{item.volume}}</em>
					    			</span>
					    			<i class="addcart iconfont">
					    				&#xe634;
					    			</i>
					    		</div>
					    	</router-link>
					    </div>
					  </div>
					</div>
				</div>
			</div>
			<!--人气推荐-->
			<div class="home-popular">
				<div class="popular-title">
					<router-link to="/"><img src="../assets/img/home/home_popular.jpg"/></router-link>
				</div>
				<div class="popular-list">
					<router-link to="/" v-for="(item,index) in popularList" :key="index">
						<dl>
							<dt>
								<img :src="item.image"/>
							</dt>
							<dd>
								<h5>{{item.title}}</h5>
								<p>{{item.subtitle}}</p>
								<div class="price">
									<span>
										{{item.price}}/
										<em>{{item.volume}}</em>
									</span>
									<i class="addcart iconfont">
										&#xe634;
									</i>
								</div>
							</dd>
						</dl>
					</router-link>
				</div>
			</div>
		</section>
		 <footer>
        <ul>
            <router-link :to="{name:'Home'}" class="rl">
            <i class="iconfont icon-weibiaoti1"></i>
            <a href="javascript:;">首页</a>
          </router-link>
          <router-link :to="{name:'FenLei'}" class="rl">
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

<script src="../assets/js/home.js">
</script>

<style  lang="scss" scoped >
	@import "../assets/scss/home.scss";
	@import "../assets/css/swiper.min.css";
	@import "../assets/iconfont/iconfont.css";
</style>