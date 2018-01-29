import axios from "axios"
export default{
	name : "home-main",
	data (){
		return{
		}
	},
	mounted(){
		this.$nextTick(function(){
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var geoc = new BMap.Geocoder(); 
//					alert('您的位置：'+r.point.lng+','+r.point.lat);
					var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
				    var x = parseFloat(r.point.lng);
				    var y = parseFloat(r.point.lat);
				    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
				    var theta = Math.atan2(y,x) + 0.000003 * Math.cos(x * x_pi);
				    r.point.lng = z * Math.cos(theta) + 0.0065;
				    r.point.lat = z * Math.sin(theta) + 0.006;
					geoc.getLocation(r.point, function(rs){
					var addComp = rs.addressComponents;
					var address = addComp.city  + addComp.district + addComp.street + addComp.streetNumber;
					console.log($(".local-address"))
					$(".local-address").html(address);
//					alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
					}); 
				}
				else {
					alert('failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})
		})
	}
}