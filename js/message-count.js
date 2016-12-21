var user_id = getCookies("sharing_uid");
//var URL="htpp://localhost/rs/api";
var URL = "http://carrent.site88.net/api";
$(document).ready(function(){
	var op = 0;
	$.ajax({
		url:URL+'/msg-status.php',
		type:'POST',
		dataType: 'json',
		data:{
			user_id: user_id,
			op: op
		},
		success: function(data){
		if(data.msgcount == 0) {
			$("#msg-count").css('display','none');
		} else {
			$("#msg-count").css('display','block')
								.html(data.msgcount);
		}
		}
	});
});