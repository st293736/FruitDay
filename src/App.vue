<template>
  <div id="app">
    <router-view class="contant"/>
  </div>
</template>

<script>
import FenLei from './components/FenLei';
import $ from "./assets/javascripts/jquery.js";
export default {
  name: 'App',
  components : {
    
    FenLei
  }
}
</script>
<style lang="scss" >
@import "./assets/scss/common.scss";
@import "./assets/scss/public.scss";
</style>
