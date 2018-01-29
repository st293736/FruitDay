import axios from "axios"
export default{
	name:"self",
	data(){
		return {
			user:{}
		}
	},
	mounted(){
		axios.get("/v3/user/detail?connect_id=66vlo9gbgm8p19jn97c4s6o330")
		.then((response)=>{
			this.user = response.data.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
}
