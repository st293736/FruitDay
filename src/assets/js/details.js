import axios from 'axios';

export default {
  name: 'Details',
  data () {
    return {
    	info:[],
      lists : {},
      twos : [],
      zk : [],
      tu : [],
      PingJ : {},
      gd : {},
      JuTi : {},
      user:[]
    }
  },
  methods:{
		addCart(){
			//判断是否在线
			if(getCookie("username")){
				console.log("登录状态")
				var cookieGet = JSON.parse(getCookie("username"));
				this.user = cookieGet;
				var username = this.user.mobile
				var data={
					username:username,
					id: this.info.productItem[0].id,
					name:this.info.productInfo.product_name,
					volume:this.info.productItem[0].volume,
					weight:parseInt(this.info.productItem[0].volume)/1000 ,
					price:this.info.productInfo.price,
					delivery_tag:"明日送",
					qty : 1,
					photo:String(this.info.templatePhoto[0].image)
				};
				console.log(data)
				this.$store.dispatch("addToCart", data);
			}else{
				//存在本地
				console.log("未登录状态")
				var id = this.info.productItem[0].id;
				console.log(id);
				if(localStorage.getItem("goodsData")){
					var datas = JSON.parse(localStorage.getItem("goodsData"));
					console.log(datas)
					if(id in datas){
					console.log("存储在本地")
					datas[id].qty ++;
					var data = {};
					data[id]= datas[id]
					this.$store.dispatch("addToCart", data);
					}else{
						console.log("mei存储在")
						var data = {};
						data[id] = {
							name:this.info.productInfo.product_name,
							volume:this.info.productItem[0].volume,
							weight:parseInt(this.info.productItem[0].volume)/1000 ,
							price:this.info.productInfo.price,
							delivery_tag:"明日送",
							qty : 1,
							photo:String(this.info.templatePhoto[0].image)
						}
						this.$store.dispatch("addToCart", data);
					}
				}else{
					var data = {};
					data[id] = {
						name:this.info.productInfo.product_name,
						volume:this.info.productItem[0].volume,
						weight:parseInt(this.info.productItem[0].volume)/1000 ,
						price:this.info.productInfo.price,
						delivery_tag:"明日送",
						qty : 1,
						photo:String(this.info.templatePhoto[0].image)
					}
					this.$store.dispatch("addToCart", data);
				}
			}
			function getCookie(key){
				var cookies = document.cookie.split("; "); //将整个字符串切割为key=value的数组
				//遍历数组
				for(var i = 0;i < cookies.length;i ++){
					var cookiekeyAndValue = cookies[i].split("=");
					if(encodeURIComponent(key) == cookiekeyAndValue[0]){
						return decodeURIComponent(cookiekeyAndValue[1]);
					}
				}
			}
		}
	},
  mounted(){
  	//console.log(this);
    var id = this.$route.params.a;
  	//axios拿到跳转到详情页的商品的id

  	axios.get(`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
	  .then( (res) => {
	    //console.log(res);
	    this.info = res.data.data;
	    this.lists = res.data.data.productInfo;
	    this.twos = res.data.data.productItem;
	    this.zk = res.data.data;
	    this.tu = res.data.data.templatePhoto;
  	console.log(this.lists)
  	console.log(this.twos)
  	console.log(this.zk)
  	console.log(this.tu)
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