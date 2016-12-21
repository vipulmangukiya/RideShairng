var name_p = /^[a-zA-Z_\-]+$/;
var email_p = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,9})+$/;
var mobile_p = /[0-9]{10}/;
var pwd_p = /^[0-9A-Za-z!@#$%]{8,16}$/;
var comment = /^[a-zA-Z0-9_\-\?\.\ ]{25,100}$/;
var cnt_find_fcity = 0,
	cnt_find_tcity = 0,
	cnt_find_date = 0,
	cnt_offer_fcity=0,
	cnt_offer_tcity=0,
	cmt_txt=0,
	lug_txt=0,
	login_uname=0,
	login_pwd=0;
$(document).ready(function(){
//---Find Ride -----------------------------------------------------

	$("#from_city").on("keypress", function(){
		city = $(this).val();
		if(!name_p.test(city) || city.trim() == "") { cnt_find_fcity=0; invalid("#from_city");
		} else {cnt_find_fcity=1; valid("#from_city");}  
		find_btn_valid("#btn-fin");
	});
	$("#from_city").on("keyup",function(){
		$(this).trigger("keypress");
	});
	
	$("#to_city").on("keypress",function(){
		city = $(this).val();
		if(!name_p.test(city) || city.trim() == "") { cnt_find_tcity=0; invalid("#to_city");
		} else { cnt_find_tcity=1; valid("#to_city");} 
		find_btn_valid("#btn-fin");
	});
	$("#to_city").on("keyup",function(){
		$(this).trigger("keypress");
	});

//--------Offer Ride Step 1-------------------------
	$("#form_city_offer").on("keypress", function(){
		city = $(this).val();
		if(!name_p.test(city) || city.trim() == "") { cnt_offer_fcity=0; invalid("#form_city_offer");
		} else {cnt_offer_fcity=1; valid("#form_city_offer");}  
		offer_cnt_btn_valid("#btn-step1");
	});
	$("#form_city_offer").on("keyup",function(){
		$(this).trigger("keypress");
	});
	
	$("#to_city_offer").on("keypress",function(){
		city = $(this).val();
		if(!name_p.test(city) || city.trim() == "") { cnt_offer_tcity=0; invalid("#to_city_offer");
		} else { cnt_offer_tcity=1; valid("#to_city_offer");} 
		offer_cnt_btn_valid("#btn-step1");
	});
	$("#to_city_offer").on("keyup",function(){
		$(this).trigger("keypress");
	});
//-------------  comment Validation-------------.
	$("#ride-comment").on("keypress", function(){
		commnt = $(this).val();
		if(!comment.test(commnt) || commnt.trim() == "") { cmt_txt=0; invalid("#ride-comment");
		} else {cmt_txt=1; valid("#ride-comment");}  
		cmt_btn_valid("#btn-step2");
	});
	$("#ride-comment").on("keyup",function(){
		$(this).trigger("keypress");
	});
	$("#tc").on("change", function(){
		$("#ride-comment").trigger("keypress");
	});
	$("#dt-dept").focusout( function(){
		alert($(this).val());
	});
	$("#btn-step2").on("submit", function(){
		alert(1);
	});
//---------- Login Validation------------------ 
$("#login-username").on("keypress", function(){
		lo_uname = $(this).val();
		if(!email_p.test(lo_uname) || lo_uname.trim() == "") { login_uname=0; invalid("#login-username");
		} else {login_uname=1; valid("#login-username");}  
		login_valid("#btn_login");
	});
	$("#login-username").on("keyup",function(){
		$(this).trigger("keypress");
	});
	
	$("#login-password").on("keypress",function(){
		lo_pwd = $(this).val();
		if(!pwd_p.test(lo_pwd) || lo_pwd.trim() == "") { login_pwd=0; invalid("#login-password");
		} else { login_pwd=1; valid("#login-password");} 
		login_valid("#btn_login");
	});
	$("#login-password").on("keyup",function(){
		$(this).trigger("keypress");
	});


	//----------- button Disable ------------------------------	
function find_btn_valid(id) {
	//------Find Ride-------------------------------------
	if(cnt_find_fcity==1 && cnt_find_tcity ==1) {
		$(id).css('background',"#f96748").removeAttr("disabled");
	}
	else {
		$(id).css('background',"#a5a5a5").attr("disabled","true");
	}
}
//---- Offer Ride Step-1----------------
function offer_cnt_btn_valid(id) {
	if(cnt_offer_fcity==1 && cnt_offer_tcity ==1) {
		$(id).css('background',"#f96748").removeAttr("disabled");
	}
	else {
		$(id).attr("disabled","true");
		$(id).css('background',"#a5a5a5");
	}
}
//=-----------------Comment Function -----------
function cmt_btn_valid(id) {
	var tnc = document.getElementById("tc").checked;
	 
	if(cmt_txt==1 && tnc == true) {
		$(id).css('background',"#f96748").removeAttr("disabled");
	}
	else {
		$(id).css('background',"#a5a5a5").attr("disabled","true");
	}
}
});
function login_valid(id) {
	//------Find Ride-------------------------------------
	
	if(login_uname==1 && login_pwd ==1) {
		$(id).css('background',"#f96748").removeAttr("disabled");
		
	}
	else {
		$(id).css('background',"#a5a5a5").attr("disabled","true");
	}
}

function valid(id) {
	$(id).css("color","black");
}
function invalid(id) {
	$(id).css("color","red");
}
