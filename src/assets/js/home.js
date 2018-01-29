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
			axios.get(`/v3/ad/homepage?connect_id=4a2bok50tg7ndk70rftdtplkr4&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=`)
			.then((res)=>{
			console.log(res);
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
			//console.log(this.fruitSwiper)
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
