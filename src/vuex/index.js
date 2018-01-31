import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
if(localStorage.getItem("data")){
	var data = JSON.parse(localStorage.getItem("data"));
	console.log(data)
	state = data;
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
function sveTolocal(state){
	localStorage.setItem("data",JSON.stringify(state));
}
var state = {
	cartData:[]
}
if(localStorage.getItem("data")){
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}
function sveTolocal(state){
	localStorage.setItem("data",JSON.stringify(state));
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
const mutations={
	addToCart:function(state,goodsInfo){
		state.cartData.push(goodsInfo);
		console.log(this.state.cartData);
		//判断是否登录
		if(getCookie("username")){
			console.log("存入数据库")
			var cookieGet = JSON.parse(getCookie("username"));
			this.user = cookieGet;
			console.log(this.user);
			var datas = goodsInfo;
			axios.post("/addCart/addCart_ajax",datas)
			.then((res)=>{
				console.log(res)
				console.log("连接")
			})
			.catch((err)=>{
				console.log(err)
			})
			
		}else{
			console.log("存入本地")
			sveTolocal(state)
		}
	}
}
 const actions = {
 	addToCart:function({commit},goodsInfo){
 		commit("addToCart",goodsInfo);
 	}
 }
export default new Vuex.Store({
	state,
	mutations,
	actions
})
