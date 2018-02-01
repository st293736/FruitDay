import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
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
	localStorage.setItem("goodsData",JSON.stringify(state));
}
var state = {
}
if(getCookie("username")){
	axios.post("/addCart/getCart_ajax")
	.then((res)=>{
		console.log("连接到数据库")
	})
	.catch((err)=>{
		console.log(err)
	})
}else{
	console.log("用户不在")
	if(localStorage.getItem("goodsData")){
		var data = JSON.parse(localStorage.getItem("goodsData"));
		state = data;
	}
}
function sveTolocal(state){
	localStorage.setItem("goodsData",JSON.stringify(state));
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
		//判断是否登录
		if(getCookie("username")){
			console.log("存入数据库")
			var cookieGet = JSON.parse(getCookie("username"));
			this.user = cookieGet;
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
			var id = JSON.stringify(goodsInfo).slice(2,7);
			state[id]=goodsInfo[id];
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
