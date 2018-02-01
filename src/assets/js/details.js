import axios from 'axios';

export default {
  name: 'Details',
  data () {
    return {
      lists : {},
      twos : [],
      zk : [],
      tu : [],
      PingJ : {},
      gd : {},
      JuTi : {}
    }
  },
  mounted(){
  	//console.log(this);
    var id = this.$route.params.a;
  	//axios拿到跳转到详情页的商品的id
  	
  	axios.get(`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
	  .then( (res) => {
	    //console.log(res);
	    this.lists = res.data.data.productInfo;
	    this.twos = res.data.data.productItem;
	    this.zk = res.data.data;
	    this.tu = res.data.data.templatePhoto;
	    //console.log(res.data.data.productInfo.product_name);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
    //评价的axios
    axios.get(`/v3/comment/rate_and_comment?product_id=${id}`)
    .then((res) => {
      //console.log(res);
      this.PingJ = res.data.data.num;
      this.gd = res.data.data.good;
      this.JuTi = res.data.data.data;
      //console.log(this.JuTi)
    })
    .catch(function (error) {
      console.log(error);
    });
  	//商品 详情的评价的点击事件
  	$(".commodity").css({
  		"color" : "#65a032",
  		"border-bottom" : "4px solid #65a032"
  	})
  	$(".aa").click(function(){
  		//console.log($(this));
  		$(this).css({
  			"color" : "#65a032",
  			"border-bottom" : "4px solid #65a032"
  		})
  		$(this).siblings().css({
  			"color" : "#000",
  			"border-bottom" : "none"
  		})
  	});
  	//明日达按钮
  	this.$nextTick(function(){
	  	$(".bao").on("click",".con_L",function(){
	  		//console.log($(this));
	  		$(this).css({
	  			"background" : "#ff8000",
	  			"color" : "#fff"
	  		})
	  		$(this).siblings().css({
	  			"background" : "#fff",
	  			"color" : "#3a3a3a"
	  		})
	  	});
  	})
  }
}