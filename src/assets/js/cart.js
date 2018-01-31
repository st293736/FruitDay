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
			numbers:1
		}
	},
	mounted(){
		var that = this;
		axios.get("/v3/cart/get?connect_id=m4vea4pl6tfooalkaqo1j9sfs5&store_id_list=3&item_id=")
		.then((response)=>{
			this.product = response.data.cart;
//			this.product.length = 0;
			console.log(this.product);
			if(this.product.length == 0){
				this.showflag = true;
			}else{
				//计算总重,总价格,总产品件数
				var length = response.data.cart.products.length;
				for(var i = 0;i < length; i ++){
	//				console.log(response.data.cart.products[i].weight);
					this.weight += Number(response.data.cart.products[i].weight) * Number(response.data.cart.products[i].qty);
					this.price += Number(response.data.cart.products[i].price) * Number(response.data.cart.products[i].qty);
				}
				this.number = length;
			}
		}).catch(function(err){
			console.log(err);
		})
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
						$("ul:eq(0)").children("p").children("span:eq(1)").children("span").html(mg);
					}
				}
			})
		})
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
							$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight - weight_one);
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
							$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight + weight_one);
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
							console.log(n);
							$("#tilt").css("display","block");
							$("#hint").css("display","flex");
						}
						//获取显示的总重量
						var weight = Number($(this).parents("li").siblings("p").children("span:eq(1)").children("span").html());
						//当前商品的总重量
						var str = Number($(this).parents(".number").siblings(".product").children("p:eq(0)").children("span:eq(1)").html());
						weight = weight - str;
						$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight);
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
						$(this).parents("li").siblings("p").children("span:eq(1)").children("span").html(weight);
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
//				console.log($("ul li").eq(index));
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
