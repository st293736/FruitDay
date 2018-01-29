<template>
  <div id="app">
    <router-view class="contant"/>
    <Footer/>
  </div>
</template>

<script>
import FenLei from './components/FenLei';
import Footer from './components/Footer';
import $ from "./assets/javascripts/jquery.js"
export default {
  name: 'App',
  components : {
    Footer,
    FenLei
  }
}
</script>
<style lang="scss" >
@import "./assets/scss/common.scss";
@import "./assets/scss/public.scss";
</style>
