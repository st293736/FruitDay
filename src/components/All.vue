<template>
  <div class="All">
  	<div class="a" v-if="tit">
     <router-link :to="{name:'FenLei',params:{fid:303}}" class="iconfont icon-fanhui y"></router-link>
     <span>{{tit.name}}</span> 
     <i class="iconfont icon-search e"></i>
    </div>

    <div class="swiper-container" v-if="list">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" @click="showToggle()" v-for="item in list">
              {{item.name}}
            </li>
        </ul>  
      </div> 

    <div id="ZH">
      <ul>
        <li class="LL">综合</li>
        <li class="LL">销量</li>
        <li class="LL">价格</li>
      </ul>
    </div>
    <main>
      
      <ul>
        <li  v-for="aa in eve">
        <router-link class="main_li "  :to="{name:'Details',params:{a:aa.id}}">
          <p class="p1">
            <span v-if="aa.cart_tag">{{aa.cart_tag}}</span>
            <img :src="aa.bphoto" alt="">
          </p>
          <div class="p2">
            <i id="zi">{{aa.product_name}}</i><br>
            <em>{{aa.product_desc}}</em><br>
            <b>{{aa.volume}}</b>
            <p id="pp">
              ¥<span class="span1">{{aa.price}}</span>
              <i class="i1">明日达</i>
              <span class="span2">
                <i class="iconfont icon-tianjia"></i>
              </span>
            </p>
          </div>
        </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script src="../assets/js/All.js">

</script>

<style scoped lang="scss" src="../assets/scss/All.scss">

</style>
