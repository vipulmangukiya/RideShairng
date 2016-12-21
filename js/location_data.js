 var user_id = getCookies("sharing_uid");
 //var URL = "http://localhost/rs/api";
 var URL = "http://carrent.site88.net/api";

$(document).ready(function(){
		$("#btn-ride-offer-li").on("click", function(){
		$("#track_div").fadeIn(300).show();
		$("#share_div").hide();
		$("#user_list").hide();
		$("#head-title").html("Track Location");
		$("#offer-color").css("color","rgb(249, 103, 72)");
		$("#find-color").css("color","rgb(127,127,127)");
	});
	$("#btn-ride-find-li").on("click", function(){
		$("#share_div").fadeIn(300).show();
		$("#user_list").fadeIn(300).show();
		$("#track_div").hide();
		$("#head-title").html("Share Location");
		$("#find-color").css("color","rgb(249, 103, 72)");
		$("#offer-color").css("color","rgb(127,127,127)");
	});
	$("#btn_user_search").on("click", function() {
		
		var keyword = $("#keyword").val();
		var op = 1;
		$.ajax({
			url: URL+'/search.php',
			type:'POST',
			dataType: 'json',
			data: {
				user_id: user_id,
				keyword: keyword,
				op: op
			},
			success: function(data) {
				if(data.error != "") {
					$("#user_list").html(data.error);
				} else {
					$("#user_list").html("");
					$("#user_list").html(data.users);
				}
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function() {
			}
		});
	});
//--- Allow user -----------------------------------	
	$(document).on("click",".btn-allow", function(){
		var allow_user_id = $(this).attr('data-value');
		var op = 2;
		
		$(this).css({"background":"#f1f1f1","color":"black"})
				.html("Deny")
				.removeClass("btn-allow")
				.addClass("btn-deny");
		$.ajax({
			url: URL+'/search.php',
			type:'POST',
			dataType: 'json',
			data: {
				user_id: user_id,
				allow_user_id:allow_user_id,
				op: op
			},
			success: function(data) {
					$("#user_list").html(data.users);
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function() {
			}
		});
		}); 
//----Deny User Location ---------------------------------------
	$(document).on("click",".btn-deny", function(){
		var deny_user_id = $(this).attr('data-value');
		var op = 4;
		$.ajax({
			url: URL+'/search.php',
			type:'POST',
			dataType: 'json',
			data: {
				user_id: user_id,
				deny_user_id:deny_user_id,
				op: op
				},			
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function() {
			}
		});
		$(this).css({"background":"#f96748","color":"white"})
				.html("Allow")
				.removeClass("btn-deny")
				.addClass("btn-allow");
	});

//--------------------------------------		
		$("#offer-color").on("click", function(){
			var op=3;
			$.ajax({
			url: URL+'/search.php',
			type:'POST',
			dataType: 'json',
			data: {
				user_id: user_id,
				op: op
			},
			success: function(data) {
				$("#allow_user_list").html("");
				$("#allow_user_list").html(data.users_view);
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function() {
			}
		});
		});
});

		
//-------- Get Cookies Value ------------------
function getCookies(keyId) {
		var AllCookie = document.cookie.split(';');
		var uid = "";
		for(var i=0; i<AllCookie.length; i++) {
			var c = AllCookie[i],
				arr = c.split('='),
				key = arr[0],
				value = arr[1];
				if(key == keyId) {
					uid = value;
				} 
		}
		return uid;
	 }