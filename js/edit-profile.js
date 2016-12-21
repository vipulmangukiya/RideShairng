//var  URL = "http://localhost/rs/api";  // API url address
 var URL = "http://carrent.site88.net/api";
var uid = getCookies("sharing_uid");

 $(document).ready(function() { 
//--------Gender Option Select -------------
	$(".gender").on("click", function(){
		$("#op-gender").toggle();
	});
	$(".op-toggle-gender").on("click", function(){
		$("#op-gender").toggle();
	});
	$(document).on("click","#op-gender a",function() {
		$("#sel-gender").html($(this).text()); // put value on text use in API
	});
	$(document).on("click", ".gender-a li", function(){
		$("#txt-gender").val($(this).attr("data-value")); // put value on text use in API
	});
	
//---------- Load User Profile Infomation----------------------------
	$("#txt-user_id").val(uid); // Login user is Set using cookies
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
				$("#edit-bio").html(data['biodata']);
				$("#user_mobile").val(data['user_mobile']);
				$("#user_email").val(data['user_email']);
				$("#edit-firstname").val(data['user_firstname']);
				$("#edit-lastname").val(data['user_lastname']);
				$("#user_avtar_img").attr('src','data:image/jpeg;base64,'+data.user_avatar);
				
				$("#user_img_db").html("");
				$("#user_img_db").html(data.user_avatar);
				if((data['user_gender']) =="M") {
					$("#sel-gender").html("Male");
				}  else if((data['user_gender']) =="F"){
						$("#sel-gender").html("Female");
				}
				$("#edit-dob").val(data['user_dob']);
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function(textStatus ,error, jqXHR) {
				console.log("Error: "+error+" Text: "+textStatus + " " + jqXHR);
			}
		});
 });