var URL = "http://carrent.site88.net/api";
//var URL = "http://localhost/rs/api"
$(document).ready(function(){
	$("#from_city").keyup(function(e){
		e.preventDefault();
			var result = "#form_result",
			iid = "@1";
			cityAuto(this,result,iid,e);
	});
	$("#to_city").keyup(function(e){
		e.preventDefault();
			var result = "#to_result",
			iid = "@2";
			cityAuto(this,result,iid,e);
	});
	$("#form_city_offer").keyup(function(e){
		e.preventDefault();
			var result = "#from_result_offer",
			iid = "@3";
			cityAuto(this,result,iid,e);
	});
	$("#to_city_offer").keyup(function(e){
		e.preventDefault();
			var result = "#to_result_offer",
			iid = "@4";
			cityAuto(this,result,iid,e);
	});
});
function cityAuto (id,result,iid,e) {
	var keyword = $(id).val();
		if(keyword.length) {
			if(e.keyCode !=40 && e.keyCode !=38 && e.keyCode !=13) {
				$.ajax({
					type: 'POST',
					url: URL+'/city.php',
					data: "data="+keyword+iid,
					success: function(data) {
						$(result).fadeIn("slow").html(data);
					}
				});
			}
		}		
}