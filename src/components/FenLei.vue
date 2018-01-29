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
            <h3 class="titD" v-for="tt in list">
              {{tt.name}}
          </h3>
          <span>全部<i class="iconfont icon-guanbi"></i></span>
         </div>
          <dl id="r" v-for="items in list.class3Group">
            <dt><img :src="items.class_photo" alt=""></dt>
            <dd>{{items.name}}</dd>
          </dl>
        </div>
     </div>      
    </main>
  </div>
</template>

<script src="../assets/js/FenLei.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/FenLei.scss">

</style>
