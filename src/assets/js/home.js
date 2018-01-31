import axios from "axios"
import Swiper from "../../../static/javascript/swiper.min.js"
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
//		addCart(goodsList,index){
//			if(getCookie("username")){
//			var cookieGet = JSON.parse(getCookie("username"));
//			this.user = cookieGet;
//			console.log(this.user);
//			}else{
//				console.log("no")
//			}
//			console.log(this[goodsList][index])
//			var datas = new Object({
//				username:this.user.mobile,
//				name:this[goodsList][index].title,
//				volume:this[goodsList][index].volume,
//				weight:parseInt(this[goodsList][index].volume)/1000 + "kg",
//				price:this[goodsList][index].price,
//				qty: 1,
//				photo:this[goodsList][index].image
//			})
//			console.log(datas);
//			var dataStr = JSON.stringify(datas)
//			axios.post("/addCart/addCart_ajax",datas)
//			.then((res)=>{
//				console.log(res)
//				console.log("连接")
//			})
//			.catch((err)=>{
//				console.log(err)
//			})
//			function getCookie(key){
//				var cookies = document.cookie.split("; "); //将整个字符串切割为key=value的数组
//				//遍历数组
//				for(var i = 0;i < cookies.length;i ++){
//					var cookiekeyAndValue = cookies[i].split("=");
//					if(encodeURIComponent(key) == cookiekeyAndValue[0]){
//						return decodeURIComponent(cookiekeyAndValue[1]);
//					}
//				}
//			}
//		}
		addCart(detail){
			this.$store.dispatch("addToCart", detail);
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
//					alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
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
			console.log(this.popularList);
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
