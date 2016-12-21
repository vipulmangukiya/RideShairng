//var URL ="http://localhost/rs/api";
var URL = "http://carrent.site88.net/api";
$(document).ready(function(){
	var ride_id = qToJ().ride_id,
		ride_user_id= "";
	
	console.log(ride_id);
	$.ajax({
		type:'POST',
		url:URL+'/ride-info.php',
		dataType:'json',
		crossDomain: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		data : {
			ride_id: ride_id
		},
		success: function(data) {
			$("#ride-result-info").html(data.ride);
			ride_user_id = data.user_id;
			console.log(data.user_id);
			$("#lbl_ride_info").html(data.route);
			
			setMusicIcon(data.music);
			setSmokIcon(data.smok);
			setChitiIcon(data.chiti);
			setPetsIcon(data.pets);
		},
		beforeSend: function() {
				$(".spinner").show();
		},
		complete: function() {
				$(".spinner").hide();
		},
		error: function() {
		}
	});
//-------Send Car Owner Message (Contacts)------
	$("#btn-contact-msg").on("click", function() {
		var uid = getCookies("sharing_uid");
		var  msg = $("#msg").val();
		if(msg !=""){
			if(uid == "") {
				$("#msg-modal").modal('hide');
				$("#login-modal").modal('show');
				return false;
			} else if(uid == ride_user_id) {
				$(".error_msg_vipz").html("You Can't Send Yourself Message").fadeIn(400).delay(3000).fadeOut(400);
				return false ;
			}
			$.ajax({
				type:'POST',
				url: URL+'/msg-car-owner.php',
				crossDomain: true,
				dataType:'json',
				data: {
					uid: uid,
					ride_user_id: ride_user_id,
					msg: msg
				},
				success: function(data) {
					console.log(data);
					if(data.msg_st == "1") {
						$(".error_msg_vipz").html("Car Owner Contact Shortly").fadeIn(400).delay(3000).fadeOut(400);
							$("#frm-carOwner-msg").trigger('reset');
				}
				}
			});
	} else {
		$(".error_msg_vipz").html("Blank Message Can't Send").fadeIn(400).delay(3000).fadeOut(400);
	}
	});
});

function qToJ() {
	var j,q;
	q = window.location.search.replace(/\?/,'').split('&');
	j = {};
		q.forEach(function(pair) {
			pair = pair.split('=');
			j[pair[0]] = decodeURIComponent(pair[1] || '');
			
		});
		$.each(j, function(key, value){
			if(value === "" || value === null) {
				delete j[key];
			}
		});
		return  JSON.parse(JSON.stringify(j));
}