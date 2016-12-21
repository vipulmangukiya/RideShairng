//var URL = "http://localhost/rs/api";
var URL = "http://carrent.site88.net/api";
var user_id = getCookies("sharing_uid");

$(document).ready(function(){

	// Div Navigation Message & Notification.......
	$("#btn-message-li").on("click", function(){
		$("#div_message").fadeIn(300).show();
		$("#div_notification").hide();
		$("#find-color").css("color","rgb(249,103,72)");
		$("#offer-color").css("color","rgb(127,127,127)");
	});
	
	//Notifiocation
	$("#btn-notification-li").on("click", function(){
		$("#div_notification").fadeIn(300).show();
		$("#div_message").hide();
		$("#offer-color").css("color","rgb(249,103,72)");
		$("#find-color").css("color","rgb(127,127,127)");
	});
	
	// Load All Message & Notification When Page Load
	$.ajax({
		url: URL+"/message.php",
		type: 'post',
		dataType: 'json',
		data: {
			user_id: user_id
		},
		success: function(data){
			$("#div_message").html(data.user_msg);
			if(data.msgcount == 0) {
			$("#msg-count").css('display','none');
		} else {
			$("#msg-count").css('display','block')
								.html(data.msgcount);
		}
		},
		beforeSend: function() {
			$("#spinner-load").addClass("spinner");
		},
		complete: function() {
				$("#spinner-load").removeClass("spinner");
		}
	});
	$(document).on("click", ".read", function(){
				var id = $(this).attr('data-value');
				var op = 1;
				$.ajax({
					url:URL+'/msg-status.php',
					type:'POST',
					dataType: 'json',
					data:{
						user_id: user_id,
						op: op,
						msg_id:id
					},
					success: function(data){
						$("#msg-count").html(data.msgcount);
					}
				});
	});
});