import axios from "axios"
export default{
	name:"self",
	data(){
		return {
			user:{}
		}
	},
	mounted(){
		axios.get("/v3/user/detail?connect_id=kms9kldda5j6nr7n33rjg5h964")
		.then((response)=>{
			this.user = response.data.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
}
