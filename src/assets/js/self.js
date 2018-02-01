import axios from "axios"
export default{
	name:"self",
	data(){
		return {
			user:{}
		}
	},
	methods:{
	},
	mounted(){
		if(getCookie("username")){
			var cookieGet = JSON.parse(getCookie("username"));
			this.user = cookieGet;
		}else{
			this.$router.push({path:"/login"});
		}
		//创建cookie
		function createCookie(key,value,expires){
			var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
			if(typeof expires == "number"){
				var date = new Date(); //创建日期对象
				date.setDate(date.getDate() + expires); //修改日期
				cookieText += ";expires=" + date; //设置有效期
			}
			document.cookie = cookieText; //创建cookie
		}
		//获取cookie
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
		//删除cookie
		function removeCookie(key){
			document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
		}
	}
}
