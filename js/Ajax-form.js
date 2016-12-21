var name_p = /^[a-zA-Z_\-]+$/,
	email_p = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,9})+$/,
    mobile_p = /[0-9]{10}/,
    pwd_p = /^[0-9A-Za-z!@#$%]{8,16}$/;

$(document).ready(function(){
	
	//var  URL = "http://localhost/rs/api";  // API url address
	var URL = "http://carrent.site88.net/api";
	var car_avatar ="";
//------------ Login ------------------------
	$("#login-form").on("submit", function(e) {
		e.preventDefault();

		var username = $("#login-username").val(),
			password = $("#login-password").val();
			 if(username.trim() =="" || !email_p.test(username)) {
				$(".error_msg_vipz").html("Invalid Email ID").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} else if(password.trim() =="" || !pwd_p.test(password)) {
					$(".error_msg_vipz").html("Invalid password ").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 
		var msg = ".error_msg_vipz";
		var url = URL+'/login.php';
		Ajax_form(this,msg,url); 		
	});
	
//------------ Register -------------------------
	$("#register-form").on("submit", function(e) {
		e.preventDefault();
		var fname= $("#register-fname").val(),
			lname= $("#register-lname").val(),
			email= $("#register-email").val(),
			pwd= $("#register-password").val(),
			mobile= $("#register-mobile").val(),
			bdate= $("#register-bdate").val();
			if(fname.trim() =="" || !name_p.test(fname)) {
				$(".error_msg_vipz").html("Invalid firstname").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} else if(lname.trim() =="" || !name_p.test(lname)) {
					$(".error_msg_vipz").html("Invalid lastname ").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 
				else if(email.trim() =="" || !email_p.test(email)) {
					$(".error_msg_vipz").html("Invalid Email ID").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 
				else if(pwd.trim() =="" || !pwd_p.test(pwd)) {
					$(".error_msg_vipz").html("Invliad password <br> Password must be 8 character long").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 
				else if(mobile.trim() =="" || !mobile_p.test(mobile)) {
					$(".error_msg_vipz").html("Invalid Mobile number ").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 
				else if(bdate == "") {
					$(".error_msg_vipz").html("Inavlid Birthdate").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				} 

			var msg = ".error_msg_vipz",
			url = URL+'/register.php';
			Ajax_form(this,msg,url); 		
	});

//------------ Forgot Password --------------------
	$("#lost-form").on("submit", function(e) {
		e.preventDefault();
		var lost_email = $("#lost-email").val();
			 if(lost_email.trim() =="" || !email_p.test(lost_email)) {
				$(".error_msg_vipz").html("Invalid Email ID").fadeIn(400).delay(3000).fadeOut(400);
					return false;
				}
			var msg = ".error_msg_vipz",
			 url = URL+'/forgot.php';
			Ajax_form(this,msg,url); 	
	});

//-------- Find Ride ---------------------------------
	$("#find-ride-frm").on("submit", function(event){
		event.preventDefault();
		var dt = $("#dt_find").val();
			$("#ride-result").show();
			$("#ride-result-data").show();
			var dt=$("#dt_find").val();
			var msg = ".error_msg_vipz";
			if(dt==""){
				$(".error_msg_vipz").html("Select Ride Date ").fadeIn(400).delay(3000).fadeOut(400);
				return false;
			}
			url=URL+'/findride.php';
			Ajax_form(this,msg,url)
	});
//--------- Email Alert ---------------------------
	$(document).on("submit","#frm-email-alert", function(e){ 
		e.preventDefault();
				var from = $("#from_city").val(),
					to = $("#to_city").val(),
					dt = $("#dt_find").val();
			
					$(".error_msg_vipz").html("Shortly Info. to new ride available").fadeIn(400).delay(3000).fadeOut(400);
		});
		
//------  Ride Share (offer )  -----------------------
	$("#frm-ride-share").on("submit", function(e){
		e.preventDefault();
		var id  = getCookies("sharing_uid");
		var uid =  $("#txt-user_id").val();
			if( id == "") {
				$("#login-modal").modal('show');
			} 
			else  {
				$("#txt-user_id").val(id);
				var msg = ".error_msg_vipz",
				price = $("#lbl-price").text(),
				seats = $("#lbl-seat").text(),
				url = URL+'/ride-offer.php';
				$("#txt-price").val(price);
				$("#txt-seats").val(seats);
				Ajax_form(this,msg,url);
			}
	});
//--------- Edit  User Profile -----------------------
	$("#frm-edit-user-profile").on("submit",function(e) {
			e.preventDefault();
			var url = URL+'/edit-profile.php',
				msg = ".error_msg_vipz";
			// all the field validation chk
		








			Ajax_form(this,msg,url);
	});
//---------- Add User Car Deatils --------------------
	 $("#frm-add-user-car").on("submit", function(e) {
		e.preventDefault();
		var brand = $("#txt-sel-brand").val(),
				modal = $("#txt-sel-modal").val(),
				seats = $("#txt-sel-seats").val(),
				color = $("#txt-sel-car-color").val(),
				type = $("#txt-sel-car-type").val();
				if(brand =="") {
					invalid("! Select car brand ");
					return false;
				} else if(modal == "") {
					invalid(" select car modal  ");
					return false;
				} 
				else if(seats == "") {
					invalid(" select car seat  ");
					return false;
				} 
				else if(color == "") {
					invalid(" select car color  ");
					return false;
				} 
				else if(type == "") {
					invalid(" select car type  ");
					return false;
				} 
		var url = URL+'/add-car.php',
			msg = ".error_msg_vipz";
			Ajax_form(this,msg,url);
	 });
//---------- Edit User Car Deatils --------------------
	 $("#frm-edit-user-car").on("submit", function(e) {
		e.preventDefault();
		var url = URL+'/edit-car.php',
			msg = ".error_msg_vipz";
			Ajax_form(this,msg,url);
			
	 });
//---------- Edit User preferences Deatils --------------------
	 $("#frm-edit-preferences").on("submit", function(e) {
		e.preventDefault();
	
		var url = URL+'/preference.php',
			msg = ".error_msg_vipz"
			Ajax_form(this,msg,url); 
	 });

});

function Ajax_form(id,resmsg,url) {
	var user_id,
		login_st,
		data = new FormData();
		$(id).find(':file').each(function(key, input){
			var name = $(id).attr("name"),
			    file = $(id).attr("file")[0];
			if ((typeof (file) !=='undefined') && (typeof(name) !== 'undefined') ) {
				data.append(name,file);
			}
		});
		
	//------ other Form Data  -----------------
		var other_data = $(id).serializeArray();
		$.each(other_data, function(key, input){
			data.append(input.name, input.value);
		});
		var url  = url,
			type = $(id).attr('method');
			
		$.ajax({
			crossDomain: true,
			url: url,
			type: type,
			data:data,
			dataType: 'json',
			contentType: false,
			cache: false,
			processData: false,
			success: function(data) {
			//----Login Response --------------------------
				if(data.status_login == 0) {
					$(resmsg).html(data.msg_login).fadeIn(400).delay(3000).fadeOut(400);
				} else if(data.status_login == 1) {
					user_id = data.user_id;
					login_st = 1; 
				}
			//-------- Register Response---------------------------
				if(data.status_reg == 0) {
					$(resmsg).html(data.msg_reg).fadeIn(400).delay(3000).fadeOut(400);
					$("#register-form").trigger('reset');
				} else if(data.status_reg == 1) {
					$(resmsg).html(data.msg_reg).fadeIn(400).delay(3000).fadeOut(400);
				} else if(data.status_reg == 2) {
					$(resmsg).html(data.msg_reg).fadeIn(400).delay(3000).fadeOut(400);
				}
				 else if(data.status_reg == 3) {
					$(resmsg).html(data.msg_reg).fadeIn(400).delay(3000).fadeOut(400);
				}
			//------ Forgot Password  Response -------------------
				if(data.lost_chk == 0){
					$(resmsg).html(data.msg_lost).fadeIn(400).delay(3000).fadeOut(400);
				}
			//---------- Ride Result Response -------------------
				if(data.ride_status == 1) {
					$("#ride-result-data").html("");
					$("#ride-result").html("");
						$("#ride-result").html(data.ride_result);
						$.each(data.data, function(i){
							if(data.data[i] !== 1)
								$("#ride-result-data").append(data.data[i]);
						}); $("#ride-result").html(data.ride_result);
						sessionStorage.setItem("ride-result-old",data.ride_result);
						sessionStorage.setItem("ride-result-data-old",$("#ride-result-data").html());
				} else if(data.ride_status == 0) {
					$("#ride-result-data").html("");
					$("#ride-result").html("");
					$("#ride-result").html(data.ride_result);
					
				}
				
			//---------- Ride Offer Response ---------------------------------------
				if(data.offer_status == "1" ) { 
				window.location.href = 'ride_offer_success.html?ride_id='+data.ride_id;
				}
			//--------------Edit Profile Response -------------------------------
				if(data.status_update == "1") {
					console.log(data.status_update+data.msg_update);
					$(resmsg).html(data.msg_update).fadeIn(400).delay(3000).fadeOut(400);

				} else if (data.status_update == "0"){
					$(resmsg).html(data.msg_update).fadeIn(400).delay(3000).fadeOut(400);
					
				}
			//-----------Add Car Response-----------------------
				if(data.car_add_st == 1) {
					$("#lbl_sel_colour").html('Choose a colour').css('display', 'block');
					$("#sel-color").css('display','none');
					$("#sel-modal").css('display','none');
					$("#sel-car-make").css('display','none');
					$("#sel-type").css('display','none');
					$("#lbl_sel_type").html('Select Car Type').css('display', 'block');;
					$("#lbl_sel_brand").html('Choose the Brand of car').css('display', 'block');;
					$("#lbl_sel_modal").html('Choose the car Modal').css('display', 'block');;						
					$("#sel-seat").css('display','none');
				    $("#txt-sel-brand").val(""),
				    $("#txt-sel-modal").val(""),
				    $("#txt-sel-seats").val(""),
				    $("#txt-sel-car-color").val(""),
				    $("#txt-sel-car-type").val("");						
					$(resmsg).html("Car Detail Save Successfully").fadeIn(400).delay(3000,function(){ window.location.href= 'profile.html';}).fadeOut(400);

				}
			//--------------Edit Car Response -------------------------------
				if(data.car_update == 1) {
					$(resmsg).html(data.car_update_msg).fadeIn(400).delay(3000).fadeOut(400);
					
				} else if (data.car_update == 0){
					$(resmsg).html(data.car_update_msg).fadeIn(400).delay(3000).fadeOut(400);
				}
			//---------   Edit preferences ---------------------------------
				if(data.preference_update_id == 1) {
					console.log(data);
					$(resmsg).html(data.preference_update).fadeIn(400).delay(3000).fadeOut(400);
				}
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
					$("#spinner-load").removeClass("spinner");
					//** Hide Login dialog and set userid
					if(login_st == 1) {
						$("#login-modal").modal('hide');
							var uid = getCookies("sharing_uid");
							if(uid == "") {
								var query_uid = user_id;
									if(query_uid != null)
									{
										uid=query_uid;
										document.cookie = "sharing_uid" + "=" + uid + ";";
									}	
							}
						//** When User Login Display Profile and Message On Header
					-	$("#div-user-msg").css("display","block");
						$("#div-login").css("display","none");
						$("#div-logout").css("display","block");
						$("#div-cur-his").css("display","block");
						$("#div-location").css("display","block");
						$("#div-footer").css("display","block");
						$("#going").css("display","none");
						$("#btn-offer").css("display","none");
						$("#btn-find").css("display","none");
						$.ajax({
							type:'POST',
							url: URL+'/user_car_deatils.php',
							dataType: 'json',
							data: { user_id: uid },
							success: function(data) {
							if(data.cnt_op == 1) {
								$("#ul-car-op").html(data.car_op);
								$("#car_show").show();
							}
							}
						});
					//--- Loading  History or Current ride
						$.ajax({
							url: URL+"/your-ride-details.php",
							type: 'post',
							dataType: 'json',
							crossDomain: true,
							data: {
								user_id: uid
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
						
					}
				//*** End Login Set// 	
			},
			error: function(textStatus ,error, jqXHR) {
				console.log("Error: "+error+" Text: "+textStatus + " " + jqXHR);
			}
		});
	}

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
	function invalid(msg) {
		alert(11);
			$(".error_msg_vipz").html(msg).fadeIn(400).delay(3000).fadeOut(400);
		}

function c_date_dif(dt_val) {

	var cdt = new Date(),
			 cmonth = cdt.getMonth()+1,
			    cday = cdt.getDate(),
			   cyear = cdt.getFullYear();
			alert( cyear+"-"+cmonth+"-"+cday);

var dt_val =new Date(dt_val);
		var month = dt_val.getMonth()+1,
			    day = dt_val.getDate(),
			   year = dt_val.getFullYear();

			   if(cyear == year || cyear>=year){
			   	if(cmonth == month || cmonth>=month){
			   		if(cday == day || cday>= day){
			   		
			   		}
			   	}
			   }

		}
