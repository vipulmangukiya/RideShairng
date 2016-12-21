//var URL = "http://localhost/rs/api";
var URL = "http://carrent.site88.net/api";
var user_id = getCookies("sharing_uid");

$(document).ready(function(){
	// Div Navigation of Your Ride.......
	// Current
	$(function() {
		$("#btn-ride-current-li").trigger("click");

	});
	$("#btn-ride-current-li").on("click", function(){
		$("#div_current").fadeIn(300).show();
		$("#div_history").hide();
		$("#find-color").css("color","rgb(249,103,72)");
		$("#offer-color").css("color","rgb(127,127,127)");
		$("#head-title").html("Your Current Ride");
	});
	
	//Notifiocation
	$("#btn-ride-history-li").on("click", function(){
		$("#div_history").fadeIn(300).show();
		$("#div_current").hide();
		$("#offer-color").css("color","rgb(249,103,72)");
		$("#find-color").css("color","rgb(127,127,127)");
		$("#head-title").html("Your Pervious Ride");
	});
	// Load All Message & Notification When Page Load
	$.ajax({
		url: URL+"/your-ride-details.php",
		type: 'post',
		dataType: 'json',
		crossDomain: true,
		data: {
			user_id: user_id
		},
		success: function(data){
			$("#div_current").html(data.ride_current_list);
			$("#div_history").html(data.ride_history_list);
		},
		beforeSend: function() {
			$("#spinner-load").addClass("spinner");
		},
		complete: function() {
				$("#spinner-load").removeClass("spinner");
		}
	});
});