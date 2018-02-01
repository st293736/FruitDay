import axios from "axios"
import Swiper from "../../../static/javascript/swiper.min.js"
import cart from "./cart.js"
export default{
	name : "home-main",
	data (){
		return{
			lunbo : [],
			activity : [],
			banner:[],
			hot:[],
			hotSwiper:[],
			news:[],
			newsSwiper:[],
			fruitSwiper:[],
			seafoodSwiper:[],
			meatSwiper:[],
			fastfoodSwiper:[],
			popularList:[],
			user:[]
		}
	},
	methods:{
		addCart(goodsList,index){
			//判断是否在线
			if(getCookie("username")){
				console.log("登录状态")
				var cookieGet = JSON.parse(getCookie("username"));
				this.user = cookieGet;
				var username = this.user.mobile
				var data={
					username:username,
					id: this[goodsList][index].target_id,
					name:this[goodsList][index].title,
					volume:this[goodsList][index].volume,
					weight:parseInt(this[goodsList][index].volume)/1000 + "kg",
					price:this[goodsList][index].price,
					delivery_tag:"明日送",
					qty : 1,
					photo:String(this[goodsList][index].image)
				};
				console.log(cart)
				this.$store.dispatch("addToCart", data);
			}else{
				//存在本地
				console.log("未登录状态")
				var id = this[goodsList][index].target_id;
				console.log(id);
				if(localStorage.getItem("goodsData")){
					var datas = JSON.parse(localStorage.getItem("goodsData"));
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
								name:this[goodsList][index].title,
								volume:this[goodsList][index].volume,
								weight:parseInt(this[goodsList][index].volume)/1000 + "kg",
								price:this[goodsList][index].price,
								delivery_tag:"明日送",
								qty : 1,
								photo:this[goodsList][index].image
							}
						this.$store.dispatch("addToCart", data);
					}
				}else{
					var data = {};
					data[id] = {
						name:this[goodsList][index].title,
						volume:this[goodsList][index].volume,
						weight:parseInt(this[goodsList][index].volume)/1000 + "kg",
						price:this[goodsList][index].price,
						delivery_tag:"明日送",
						qty : 1,
						photo:this[goodsList][index].image
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
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var geoc = new BMap.Geocoder(); 
//					alert('您的位置：'+r.point.lng+','+r.point.lat);
					var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
				    var x = parseFloat(r.point.lng);
				    var y = parseFloat(r.point.lat);
				    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
				    var theta = Math.atan2(y,x) + 0.000003 * Math.cos(x * x_pi);
				    r.point.lng = z * Math.cos(theta) + 0.0065;
				    r.point.lat = z * Math.sin(theta) + 0.006;
					geoc.getLocation(r.point, function(rs){
					var addComp = rs.addressComponents;
					$(".address span").html(addComp.city);
					}); 
				}
				else {
					alert('failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})
			axios.get('/v3/ad/homepage?connect_id=kms9kldda5j6nr7n33rjg5h964&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=')
			.then((res)=>{
			this.lunbo = res.data.data.banner.mainBanners[0].content;
			this.activity = res.data.data.banner.mainBanners[2].content;
			this.banner = res.data.data.banner.mainBanners[4].content;
			this.hot = res.data.data.banner.mainBanners[6].content;
			this.hotSwiper = res.data.data.banner.mainBanners[7].content;
			this.news = res.data.data.banner.mainBanners[9].content;
			this.newsSwiper = res.data.data.banner.mainBanners[10].content;
			this.fruitSwiper = res.data.data.banner.mainBanners[13].content;
			this.seafoodSwiper = res.data.data.banner.mainBanners[15].content;
			this.meatSwiper = res.data.data.banner.mainBanners[17].content;
			this.fastfoodSwiper = res.data.data.banner.mainBanners[19].content;
			this.popularList = res.data.data.banner.mainBanners[21].content;
//			console.log(this.popularList);
//			console.log(res)
			this.$nextTick(()=>{
				var mySwiper = new Swiper('.swiper-container', {
				  	freeMode : true,
					freeModeMomentum : true,
					slidesPerView: 'auto',
    				oopedSlides: 8,
				});
			})
		});
		
	}
}
