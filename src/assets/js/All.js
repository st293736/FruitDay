import axios from "axios";
import Swiper from "swiper";
export default {
  name: 'All',
  data () {
    return {
      list : [],
      tit : null,
      eve : {},
      flag : false
    }
  },
  mounted(){
	//axios
	//console.log(this.$route.params.all);
	var id = this.$route.params.all;
	axios.get(`/v3/product/sub_category_list?store_id_list=3&class2_id=${id}&class3_id=0&sort_type=1&tms_region_type=1`)
	.then((res) => {
	   //console.log(res);
	   this.list = res.data.data.brotherClass;
	   this.tit = res.data.data.fatherClass;
	   this.eve = res.data.data.productGroup;
	   //console.log(res);
	})
	.catch(function (error) {
	  console.log(error);
	});

	//第二次axios
	console.log(this);
	//this.$nextTick(function(){
		setTimeout(function(){
		var mySwiper = new Swiper('.swiper-container',{
		  slidesPerView : 2,
		  width:100
		})
	},500)
  },
  methods : {
  	showToggle :  function(index){
  		this.flag = index;
  	}
  }
} 