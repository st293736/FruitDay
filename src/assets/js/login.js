import axios from "axios"
export default{
	name : "login",
	data (){
		return{
			obj:{
				username:"",
				age: 12,
				sex:"男"
			},
			code:""
		}
	},
	methods:{
		getCode:function(){
			var value = " ";
			for(var i = 1;i <=4 ;i ++){
				var random = Math.floor(Math.random()*10);
				value += random; 				
			}	
			this.code = value;
		}
	},
	mounted(){
		var that =this;
		this.$nextTick(function(){
			$(".go").click(function(){
				var data = new Object({
									mobile:that.obj.username,
									age:that.obj.age,
									sex :that.obj.sex,
									jf:"0",
									money:"0.00",
									coupon_num:"2",
									gift_num:"0"
								})
				var cString = JSON.stringify(data);
				if(Number($(".nodecode").val()) == Number(that.code)){
					createCookie("username",cString,7)
					function createCookie(key,value,expires){
						var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
						if(typeof expires == "number"){
							var date = new Date(); //创建日期对象
							date.setDate(date.getDate() + expires); //修改日期
							cookieText += ";expires=" + date; //设置有效期
						}
						document.cookie = cookieText; //创建cookie
					}
					axios.post("/api/regist4ajax",{username:that.obj.username,pwd:"",age:that.obj.age})
					.then((res)=>{
//						console.log(that);
						that.$router.push({
							path:"/self",
							name:"self",
							params:{
								name :"我自己",
								datas: data
							}
						})

					});
				}else{
					alert("验证码输入错误")
				}
			})
		})
	}
}