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
		axios.get("/v3/cart/get?connect_id=66vlo9gbgm8p19jn97c4s6o330&store_id_list=3&item_id=")
		.then((response)=>{
//			console.log(response);
			this.product = response.data.cart;
			console.log(this.product);
			if(this.product.length == 0){
				this.showflag = true;
			}else{
				//计算总重,总价格,总产品件数
				var length = response.data.cart.products.length;
				for(var i = 0;i < length; i ++){
	//				console.log(response.data.cart.products[i].weight);
					this.weight += Number(response.data.cart.products[i].weight) * Number(response.data.cart.products[i].qty);
					this.price += Number(response.data.cart.products[i].price);
				}
				this.number = length;
			}
		}).catch(function(err){
			console.log(err);
		})
		this.$nextTick(()=>{
			$(function(){
//				console.log($(".number .minus"));
				$(".number .minus").each(function(index,value){
					$(".number .minus").eq(index).click(function(){
						console.log($(".number .num").eq(index).html());
					})
				})
			})
		})
	},
	
}
