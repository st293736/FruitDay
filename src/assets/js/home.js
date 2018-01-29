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
			popularList:[]
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
			axios.get(`/v3/ad/homepage?connect_id=dprm418i5at8kmllvvvs0s1950&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=`)
			.then((res)=>{
			this.lunbo = res.data.data.banner.mainBanners[0].content;
			this.activity = res.data.data.banner.mainBanners[2].content;
			this.banner = res.data.data.banner.mainBanners[4].content;
//			this.hot = res.data.data.banner.mainBanners[6].content;
			this.hotSwiper = res.data.data.banner.mainBanners[6].content;
			this.news = res.data.data.banner.mainBanners[8].content;
			this.newsSwiper = res.data.data.banner.mainBanners[9].content;
			this.fruitSwiper = res.data.data.banner.mainBanners[12].content;
			this.seafoodSwiper = res.data.data.banner.mainBanners[14].content;
			this.meatSwiper = res.data.data.banner.mainBanners[16].content;
			this.fastfoodSwiper = res.data.data.banner.mainBanners[18].content;
			this.popularList = res.data.data.banner.mainBanners[20].content;
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
