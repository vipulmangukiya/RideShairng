//var  URL = "http://localhost/rs/api";  // API url address
var uid = getCookies("sharing_uid"); 
var URL = "http://carrent.site88.net/api";

 $(document).ready(function() { 
//---------- Profile Div navigation ---------------------------------------
		//about
		$(function() {
			$("#btn-profile-about").trigger("click");
			
		});
		$("#btn-profile-about").on("click", function(){
			$("#div-profile-account").hide();
			$("#div-profile-about").fadeIn(300).show();
			$("#about-color").css({"color":"rgb(249, 103, 72)","border-bottom":"2px solid rgb(249, 103, 72)"});
			$("#account-color").css({"color":"rgb(127,127,127)","border-bottom":""});
		});
		// Account
		$("#btn-profile-account").on("click", function(){
			$("#div-profile-about").hide();
			$("#div-profile-account").fadeIn(300).show();
			$("#account-color").css({"color":"rgb(249, 103, 72)","border-bottom":"2px solid rgb(249, 103, 72)"});
			$("#about-color").css({"color":"rgb(127,127,127)","border-bottom":""});
		});
//-------- Redirect Add Car ----------
		$("#btn-add-car").on("click", function() {
			window.location.href = "addcar.html";
		});
//-------- Redirect User edit Profile --------------
		$("#btn-edit-profile").on("click", function() {
			window.location.href ="edit-profile.html";
		});
//--------- Redirect Edit Preference-------------
		$("#btn-edit-preferences").on("click", function() {
			window.location.href ="edit-preference.html";
		});
		
//---- Load User car, personal,preferences----------------------		
		$.ajax({
			type: 'POST',
			url: URL+'/profile.php',
			dataType:'json',
			corssDomain: true,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			data: {
				uid: uid
			},
			success: function(data) {
				$("#username").html(data['username']);
				$("#biodata").html(data['biodata']);
				$("#user_mobile").html(data['user_mobile']);
				$("#user_email").html(data['user_email']);
				$("#src_img_db_profile").attr('src','data:image/jpeg;base64,'+data.user_avatar);
				if(data.car_status == 1) {
					$("#car_info").hide();
					$("#car_modal").html(data['car_modal']);
				} else {
					$("#car_info").show();
				}
				setMusicIcon(data.music);
				setSmokIcon(data.smok);
				setChitiIcon(data.chiti);
				setPetsIcon(data.pets);
				
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function(textStatus ,error, jqXHR) {
				//console.log("Error: "+error+" Text: "+textStatus + " " + jqXHR);
			}
		});
//---------------------- Edit Car Redirection ----------------------
		$(document).on("click", ".btn-car-edit", function(){
			var car_edit_id = $(this).attr("data-value");
			window.location.href = "edit-car.html?car_id="+car_edit_id;
			
		});
//---------------------- Delete Car  ----------------------
		$(document).on("click", ".btn-car-delete", function(){
			var car_id = $(this).attr("data-value"),
			    ans = confirm("Are You Sure to Delete Car");
			if(ans) {
				$.ajax({
					type: 'POST',
					url: URL+'/delete-car.php',
					dataType:'json',
					corssDomain: true,
					headers: {
						'Access-Control-Allow-Origin': '*'
					},
					data: {
						car_id: car_id,
						uid: uid
					},
					success: function(data) {
						window.location.href ="profile.html";
					},
					beforeSend: function() {
						$("#spinner-load").addClass("spinner");
					},
					complete: function() {
						$("#spinner-load").removeClass("spinner");
					},
					error: function(textStatus ,error, jqXHR) {
						//console.log("Error: "+error+" Text: "+textStatus + " " + jqXHR);
					}
				});
			}
		});
		
 });