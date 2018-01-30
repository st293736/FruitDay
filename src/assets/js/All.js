import axios from "axios";
export default {
  name: 'All',
  data () {
    return {
      list : [],
      tit : {},
      eve : []
    }
  },
  mounted(){
  	$("body").on("touchmove mousemove",function(e){e.preventDefault();});

  	function isTouchDevice(){   
    if((navigator.userAgent.match(/android 3/i)) ||  
        (navigator.userAgent.match(/honeycomb/i)))  
        return false;  
    try{  
        document.createEvent("TouchEvent");  
        return true;  
    }catch(e){  
        return false;  
    }  
}  
function touchScroll(id){  
    if(isTouchDevice()){ //if touch events exist...  
        var el=document.getElementById(id);  
        var scrollStartPosY=0;  
        var scrollStartPosX=0;  
  
        document.getElementById(id).addEventListener("touchstart", function(event) {  
            scrollStartPosY=this.scrollTop+event.touches[0].pageY;  
            scrollStartPosX=this.scrollLeft+event.touches[0].pageX; 
        },false);  
  
        document.getElementById(id).addEventListener("touchmove", function(event) {   
            if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&  
                this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||  
                (this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))  
                    event.preventDefault();   
            if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&  
                this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||  
                (this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))  
                    event.preventDefault();   
            this.scrollTop=scrollStartPosY-event.touches[0].pageY;  
            this.scrollLeft=scrollStartPosX-event.touches[0].pageX;  
        },false);  
    }  
}  
  
touchScroll('touchscroll_div'); 

	//axios
	console.log(this.$route.params.all);
	var id = this.$route.params.all;
	axios.get(`/v3/product/sub_category_list?store_id_list=3&class2_id=${id}&class3_id=0&sort_type=1&tms_region_type=1`)
	.then((res) => {
	   console.log(res);
	   this.list = res.data.data.brotherClass;
	   this.tit = res.data.data.fatherClass;
	   this.eve = res.data.data.productGroup;
	})
	.catch(function (error) {
	  console.log(error);
	});

  }
} 