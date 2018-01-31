<template>
  <div id="search">
    <div class="top">
      <router-link :to="{name:'FenLei',params:{fid:303}}" class="top_L">
       <i class="iconfont icon-fanhui"></i> 返回
      </router-link>
      <div class="top_C">
        <i class="iconfont icon-magnifier"></i>
        <input type="text" placeholder="新鲜水果、生鲜">
      </div>
      <div class="top_R">搜索</div>
    </div>
    <div class="two">
       <div class="two_one">
          <h3>热门搜索</h3>
          <div class="two_bottom">
            <a href="javascript:;">橙</a>
            <a href="javascript:;">提子</a>
            <a href="javascript:;">樱桃</a>
            <a href="javascript:;">苹果</a>
            <a href="javascript:;">火龙果</a>
            <a href="javascript:;">瓜</a>
            <a href="javascript:;">羊蝎子</a>
            <a href="javascript:;">雪花鲳</a>
            <a href="javascript:;">车厘子</a>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/Search.scss">

</style>
