<template>
  <div class="All">
  	<div class="a">
     <i class="iconfont icon-fanhui y"></i>
     <span>{{tit.name}}</span> 
     <i class="iconfont icon-search e"></i>
    </div>
    <div class="card_message_outer">  
      <span style="white-space:pre"></span>
      <div class="card_message_center" id="touchscroll_div">  
        <span style="white-space:pre"></span>
        <div class="card_message">  
            <ul>
              <li v-for="item in list">
                {{item.name}}
              </li>
            </ul>  
        </div>  
      </div>  
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
        <li class="main_li" v-for="aa in eve">
          <p class="p1">
            <span v-if="aa.cart_tag">{{aa.cart_tag}}</span>
            <img :src="aa.bphoto" alt="">
          </p>
          <p class="p2">
            <i id="zi">{{aa.product_name}}</i><br>
            <em>{{aa.product_desc}}</em><br>
            <b>{{aa.volume}}</b>
            <p class="p2_p1">
              ¥<span class="span1">{{aa.price}}</span>
              <i></i>
              <span class="span2">
                <i class="iconfont icon-tianjia"></i>
              </span>
            </p>
          </p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script src="../assets/js/All.js">

</script>

<style scoped lang="scss" src="../assets/scss/All.scss">

</style>
