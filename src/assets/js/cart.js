import axios from "axios"
export default{
	name:"cart",
	data(){
		return {
			showflag:false,
			product:[
			
			],
			//总重量
			weight:0,
			//总价格
			price:0,
			//总产品件数
			number:0,
			//每一个产品的数量
			numbers:1,
			title:[]
		}
	},
	mounted(){
		if(getCookie("username")){
			console.log("登录状态")
			var cookieGet = JSON.parse(getCookie("username"));
			this.user = cookieGet;
			var username = this.user.mobile
			axios.post("/addCart/getCart_ajax",{"username":username})
			.then((response)=>{
				if(response.data.length == 0){
					this.showflag = true;
				}else if(response.data[0].cartList.length == 0){
					this.showflag = true;
				}else{
					for(var item in response.data[0].cartList){
						var obj =response.data[0].cartList[item];
						this.product.unshift(obj);
						//计算总重量
						this.weight = this.weight + Number(obj.weight) * obj.qty;
						//计算总价格
						this.price = this.price + Number(obj.price) * Number(obj.qty);
						//计算总数量
						this.number = this.number + Number(obj.qty);
						this.title.push(obj.id);
					}	
				}
//				this.$store.dispatch("totalNum", this.number);
			})
		}else{
			console.log("未登录状态")
			var response = JSON.parse(localStorage.getItem("goodsData"));
			if(response == null){
				this.showflag = true;
			}else{
				for(var item in response){
					var obj = response[item];
					this.product.unshift(obj);
					//计算总重量
					this.weight = this.weight + Number(obj.weight) * obj.qty;
					//计算总价格
					this.price = this.price + Number(obj.price) * Number(obj.qty);
					//计算总数量
					this.number = this.number + Number(obj.qty);
					this.title = item;
				}	
			}
//			this.$store.dispatch("totalNum", this.number);
			
		}
		this.$nextTick(()=>{
			//全选
			$(".checkAll").click(function(){
				var arr = $("ul:eq(0)").children("li").children("input");
				if(!$(this).is(":checked")){
					$(this).prop("checked",false);
					var length = arr.length;
					for(var i = 0; i<length;i ++){
						$(arr[i]).prop("checked",false);
					}
					//全不选
					//价格
					$(this).parents("p").siblings("p").children("span").children("span:eq(1)").html(0);
					//数量
					$(this).parent("p").siblings("p").children("a").children("span").html(0);
					//总重量
					$("ul:eq(0)").children("p").children("span:eq(1)").children("span").html(0)
				}else{
					$(this).prop("checked",true);
					var length = arr.length;
					for(var i = 0; i<length;i ++){
						$(arr[i]).prop("checked",true);
					}
					//全选
					var tag = $("ul:eq(0)").children("li");
					var len = tag.length;
					//总价格
					var price = 0;
					//总数量
					var nbs = 0;
					//总重量
					var mg = 0;
					for(var i =0; i<len;i++){
						//每个商品的价格
						var evePrice = Number($(tag[i]).children(".product").children("p:eq(1)").children("span:eq(1)").html()) * Number($(tag[i]).children(".number").children("p").children("span").html());
						price =price + evePrice;
						$(this).parents("p").siblings("p").children("span").children("span:eq(1)").html(price);
						//每个商品的数量
						var eveNum = Number($(tag[i]).children(".number").children("p").children("span").html());
						nbs = nbs + eveNum;
						$(this).parents("p").siblings("p").children("a").children("span").html(nbs);
						//获取到每一个商品的重量
						var eveWeight = Number($(tag[i]).children(".product").children("p:eq(0)").children("span:eq(1)").html()) * Number($(tag[i]).children(".number").children("p").children("span").html());
						mg = mg + eveWeight;
						$("ul:eq(0)").children("p").children("span:eq(1)").children("span").html(mg.toFixed(3));
					}

				}
				
			})
		})
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
		setTimeout(function(){
				//单选
				$(".option").each(function(index,value){
					$(this).click(function(){
						if(!$(this).is(":checked")){
							$(this).prop("checked",false);
							$(this).parents("section").siblings(".closing").children("p:eq(0)").children("input").prop("checked",false);
							//总商品数
							var str = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html());
							//剩余商品数
							var residue = str - Number($(this).siblings(".number").children("p").children("span").html())
							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html(residue);
							//总重量移出数
							var weight = Number($(this).parents("li").siblings("p").children("span:eq(1)").children("span").html());
							//当前商品重量
							var weight_one = Number($(this).siblings(".product").children("p:eq(0)").children("span:eq(1)").html() * Number($(this).siblings(".number").children("p").children("span").html()));
							$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html((weight - weight_one).toFixed(3));
							//当前显示的总价格
							var money = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html());
							//该商品的总价格
							var money_one = Number($(this).siblings(".product").children("p:eq(1)").children("span:eq(1)").html()) * Number($(this).siblings(".number").children("p").children("span").html());
							money = (money - money_one).toFixed(2);

							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html(money);			
						}else{
							$(this).prop("checked",true);
							//获取到当前所有ul的input
							var arlen = $("ul:eq(0)").children("li").children("input").length;
							var ins = $("ul:eq(0)").children("li").children("input:checked").length;
							if(arlen == ins){
								$(this).parents("section").siblings(".closing").children("p:eq(0)").children("input").prop("checked",true);
							}else{
								$(this).parents("section").siblings(".closing").children("p:eq(0)").children("input").prop("checked",false);
							}
							//总商品数
							var str = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html());
							//剩余商品数
							var residue = str + Number($(this).siblings(".number").children("p").children("span").html())
							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html(residue);
							//总重量移出数
							var weight = Number($(this).parents("li").siblings("p").children("span:eq(1)").children("span").html());
							//当前商品重量
							var weight_one = Number($(this).siblings(".product").children("p:eq(0)").children("span:eq(1)").html() * Number($(this).siblings(".number").children("p").children("span").html()));
							$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html((weight + weight_one).toFixed(3));
							//当前显示的总价格
							var money = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html());
							//该商品的总价格
							var money_one = Number($(this).siblings(".product").children("p:eq(1)").children("span:eq(1)").html()) * Number($(this).siblings(".number").children("p").children("span").html());
							money = (money + money_one).toFixed(2);
							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html(money);
						}
					})
				})
				//更改数量
				//获得按钮
				$(".minus").each(function(index,value){
					$(this).click(function(){
						var proName = $(this).parents(".number").siblings(".product").children("a:eq(1)").html();
						var that = this;
						var singleNum = Number($(this).siblings(".num").html());
						singleNum -= 1;
						$(this).siblings(".num").html(singleNum);
						if(singleNum <= 0){
							$(this).siblings(".num").html(1);
							var names = $(this).parents(".number").siblings(".product").children(".name").html();
							$("#hint .names").html(names);
							var index = $(this).parents(".lis").index() - 1;
							var n = control(index);
							$("#tilt").css("display","block");
							$("#hint").css("display","flex");
						}else{
							//获取显示的总重量
							var weight = Number($(this).parents("li").siblings("p").children("span:eq(1)").children("span").html());
							//当前商品的总重量
							var str = Number($(this).parents(".number").siblings(".product").children("p:eq(0)").children("span:eq(1)").html());
							weight = weight - str;
							$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight.toFixed(3));
							//获取当前的总价格
							var money = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html());
							//每个商品的总价格
							var unit = Number($(this).parents(".number").siblings(".product").children("p:eq(1)").children("span:eq(1)").html());
							money = (money.toFixed(2) - unit.toFixed(2)).toFixed(2);
							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html(money);
							//获取当前商品总数量
							var num = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html());
							//获取当前商品的数量
							num = num - 1;
							$(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html(num);
							//获取当前商品数量
							var nums = Number($(this).siblings("span").html())
							var id = $(this).parents("li").attr("title");
							if(getCookie("username")){
								console.log("登录状态")
								var cookieGet = JSON.parse(getCookie("username"));
								this.user = cookieGet;
								var username = this.user.mobile;
								axios.post("/addCart/downCart_ajax",{username:username,id:id})
								.then((res)=>{
									console.log(res)
								})
								
							}else{
								change(proName,nums);
							}

						}
					})
				})
				$(".add").each(function(index,value){
					$(this).click(function(){
						var singleNum = Number($(this).siblings(".num").html());
						singleNum += 1;
						$(this).siblings(".num").html(singleNum);
						//获取显示的总重量
						var weight = Number($(this).parents("li").siblings("p").children("span:eq(1)").children("span").html());
						//当前商品的总重量
						var str = Number($(this).parents(".number").siblings(".product").children("p:eq(0)").children("span:eq(1)").html());
						weight = weight + str;
						$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight.toFixed(3));
						//获取当前的总价格
						var money = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html());
						//每个商品的总价格
						var unit = Number($(this).parents(".number").siblings(".product").children("p:eq(1)").children("span:eq(1)").html());
						money = (money + unit).toFixed(2);
						$(this).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html(money);
						//获取当前商品总数量
						var num = Number($(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html());
						//获取当前商品的数量
						num = num + 1;
						$(this).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html(num);
						var id = $(this).parents("li").attr("title");
						console.log(id)
						if(getCookie("username")){
						console.log("登录状态")
						var cookieGet = JSON.parse(getCookie("username"));
						this.user = cookieGet;
						var username = this.user.mobile;
						axios.post("/addCart/plusCart_ajax",{username:username,id:id})
						.then((res)=>{
							console.log(res)
							})
						}else{
							change(proName,nums);
						}
					})
				})
				//添加地址
				$(".addAress").click(function(){
					$("#tilt").fadeIn("2000","linear");
					$("#address").animate({top:"1.7rem"},300,"linear");
				})
				$(".clos").click(function(){
					$("#tilt").fadeOut("2000","linear");
					$("#address").animate({top:"5.69rem"},300,"linear");
				})
				$("#tilt").click(function(){
					$("#address").animate({top:"5.69rem"},300,"linear");
					$("#tilt").fadeOut("2000","linear");
				})
			},1000)
		
		function control(index){
			var n = 0;
			//取消
			$(".cls").click(function(){
				$("#tilt").css("display","none");
				$("#hint").css("display","none");
				n = 1;
			})
			//确定
			$(".ok").click(function(){
				var that = this;
				var sp = $("ul li").eq(index).children(".number").children("p").children("span");
				//获取显示的总重量
				var weight = Number($(sp).parents("li").siblings("p").children("span:eq(1)").children("span").html());
				//当前商品的总重量
				var str = Number($(sp).parents(".number").siblings(".product").children("p:eq(0)").children("span:eq(1)").html());
				weight = weight - str;
				$(sp).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight.toFixed(3));
				//获取当前的总价格
				var money = Number($(sp).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html());
				//每个商品的总价格
				var unit = Number($(sp).parents(".number").siblings(".product").children("p:eq(1)").children("span:eq(1)").html());
				money = (money.toFixed(2) - unit.toFixed(2)).toFixed(2);
				$(sp).parents("section").siblings(".closing").children("p:eq(1)").children("span").children("span:eq(1)").html(money);
				//获取当前商品总数量
				var num = Number($(sp).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html());
				//获取当前商品的数量
				num = num - 1;
				$(sp).parents("section").siblings(".closing").children("p:eq(1)").children("a").children("span").html(num);
				//删除商品
				var proNm = $(sp).parents(".number").siblings(".product").children("a:eq(1)").html();
				var id = $(sp).parents("li").attr("title");
				if(getCookie("username")){
					console.log("登录状态")
					var cookieGet = JSON.parse(getCookie("username"));
					this.user = cookieGet;
					var username = this.user.mobile;
					axios.post("/addCart/removeCart_ajax",{username:username,id:id})
					.then((res)=>{
						console.log(res)
					})
				}else{
					del(proNm,id);
				}
				$("ul li").eq(index).remove();
				var dename = $(this).parent().siblings().children("span").html();
				$("#tilt").css("display","none");
				$("#hint").css("display","none");
				n = 2;
			})
			return n;
		}
	},
	
}
function change(str,num){
	var objs = JSON.parse(localStorage.getItem("goodsData"));
	for(var item in objs){
		if(objs[item].name == str){
			if(objs[item].qty != num){
				objs[item].qty = num;
				localStorage.setItem("goodsData",JSON.stringify(objs));
			}
		}
	}
}

function del(strName,id){
	var objs = JSON.parse(localStorage.getItem("goodsData"));
	for(var item in objs){
		if(objs[item].name == strName){
			delete objs[id];
			localStorage.setItem("goodsData",JSON.stringify(objs));
		}
	}
}
