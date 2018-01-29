<template>
  <div id="app">
    <router-view class="contant"/>
    <footer>
    	<router-link to="/">首页</router-link>
    	<router-link to="#">分类</router-link>
    	<router-link to="/cart">购物车</router-link>
    	<router-link to="/self">我的果园</router-link>
    </footer>
  </div>
</template>

<script>
		import $ from "./assets/javascripts/jquery.js"
export default {
  name: 'App'
}
</script>
<style lang="scss" >
@import "./assets/scss/common.scss";
@import url("assets/style/public.css")
</style>
