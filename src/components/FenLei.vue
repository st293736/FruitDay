<template>
  <div class="FL">
    <div class="top">
      <router-link :to="{name:'Search'}" class="top_rl">
        <i class="iconfont icon-magnifier"></i>
        <input type="text" value="奇异果" />
      </router-link>
    </div>
    <main>
      <div id="one">
        <div class="_left">
          <ul>
            <li v-for="lef in OG" class="L_li" @click="showToggle(lef.id)" >
              {{lef.name}}
             <i style="display:none">{{lef.id}}</i>
            </li>
           
          </ul>
        </div>
        <div class="_right" >
         <div class="BT">
            <h3 class="titD" v-for="yy in list">
              {{yy.name}}
          </h3>
            <span   @click="QB(list.class3Group[0].class2Id)" class="sp">全部<i class="iconfont icon-guanbi"></i>
            </span>
         </div>
          <dl id="r" v-for="items in list.class3Group">
            <dt class="ad"><img :src="items.class_photo" alt="">
            </dt>
            <dd>{{items.name}}</dd>
          </dl>
        </div>
     </div>      
    </main>
    <footer>
        <ul>
            <router-link :to="{name:'Home'}" class="rl">
            <i class="iconfont icon-weibiaoti1"></i>
            <a href="javascript:;">首页</a>
          </router-link>
          <router-link :to="{name:'FenLei',params:{fid:303}}" class="rl">
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

<script src="../assets/js/FenLei.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/FenLei.scss">

</style>
