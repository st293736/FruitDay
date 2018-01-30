
import axios from 'axios';
export default {
  name: 'FenLei',
  data () {
    return {
      list : {},
      OG : []
    }
  },
  methods : {
      showToggle(id){
         // console.log(this);
          this.$router.history.push({name:'FenLei', params:{fid: id}});
          
      },
     QB(id){
        this.$router.history.push({name:'All', params:{all: id}});
     }
    },
    mounted(){
        var that = this;
        //取到他们每个的id，让他们根据id取出数据
        var id = this.$route.params.fid;
        //console.log(id);
        axios.get(`/v3/product/category_list?store_id_list=3&class_id=${id}`)
        .then((res) => {
          //左侧
          this.OG = res.data.data.classOneGroup;
          //console.log(this.OG);
          //右侧
          this.list = res.data.data.childrenList[0];
          console.log(this.list);
        })
        .catch((error) => {
          console.log(error);
       }

       )
        setTimeout(function(){
        // this.$nextTick(()=>{
          //点击左侧切换
//      $(".L_li").eq(0).css({
//      	 "color" : "green",
//	          "background" : "#fff",
//	          "border-left" : "2px solid green"
//      })
      $(".L_li").click(function(){
        
        //点击时取到axios的数据
        var id = that.$route.params.fid;
        //console.log(id);
        axios.get(`/v3/product/category_list?store_id_list=3&class_id=${id}`)
        .then((res) => {
          //左侧
          that.OG = res.data.data.classOneGroup;
          //console.log(this.OG);
          //右侧
          that.list = res.data.data.childrenList[0];
        })
        .catch((error) => {
          console.log(error);
       }

       )
        // alert();
        var ind = $(this).children("i").text();
        //console.log(ind);
        $(this).css({
          "color" : "green",
          "background" : "#fff",
          "border-left" : "2px solid green"
        })
        $(this).siblings(".L_li").css({
          "color" : "#3a3a3a",
          "background" : "#f5f5f5",
          "border-left" : "none"

        })
        $("._right").eq(ind).show();
        $("._right").eq(ind).siblings("._right").hide();  
      })
    // })
      },100)
    }
      
    
}