<template>
  <div id="FenLei">
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

<script>
export default {
  name: 'Footer',
  data () {
    return {
     
    }
  },
  methods : {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/classify.scss">

</style>
