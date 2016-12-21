 var user_id = getCookies("sharing_uid");
 var sid = getCookies("sharing_uid");
 $(document).ready(function() {
	//var  URL = "http://localhost/rs/api";  // API url address
	var URL = "http://carrent.site88.net/api";
	
	
	
	//---User Avatar Load---------------------
		$.ajax({
		url: URL+"/user_avatar_load.php",
		type: 'post',
		dataType: 'json',
		data: {
			user_id: user_id
		},
		success: function(data){
			$("#img_src_user").attr('src','data:image/jpeg;base64,'+data.user_avatar);
			
			
		}
	});
	
//------- Login Check -----------------------------	 
		
		if(sid != ""){
			$("#div-user-msg").css("display","block");
			$("#div-login").css("display","none");
			$("#div-logout").css("display","block");
			$("#div-cur-his").css("display","block");
			$("#div-location").css("display","block");
			$("#div-footer").css("display","block");
			$("#going").css("display","none");
			$("#btn-offer").css("display","none");
			$("#btn-find").css("display","none");
		}

		//**View Ride page//
	$("#btn-viewride").on("click", function(){
		var ride_id = qToJ().ride_id;
		window.location.href ="ride-details.html?ride_id="+ride_id;
	});
	
	//*** Ride Deatils Back *//
	
	$("#btn-back-ride-details").on("click",function() {
		window.location.href = "sharing.html";
		$("#ride-result").show()
		$("#ride-result-data").show();
	});
		
	/* //** Esc Key  Back
	$(document).keypress(function(event){
		console.log(event.keyCode);
		if(event.keyCode == 13) {
		$("#div-offerride").fadeIn(300).show();
		$(".home_menu").show();
		$("#ride-step2").hide();
		}

	}); */
 	 $(function(){
		if(sid == "") {
			$("#menu_avtar").attr("href","#");
			$("#your_page").attr("href","#");
		} else  {
			$("#menu_avtar").attr("href","profile.html");
			$("#your_page").attr("href","your-ride.html");
		}
	 });   
	//*** DatePicker *****
	 $(function(){
		$("#register-bdate").datepicker({
			altField:"#register-bdate",
			changeYear:true,
			changeMonth: true,
			yearRange:'1980:2016',
			altFormat:"dd/mm/yy"
		});
			 
		
		//$("#register-bdate").datepicker();
		
	 });  
	
	//***  Luggage Option icon change **//

	$("#frm-find-ride").on("submit", function(event){
		event.preventDefault();
	});
	
	//*** check login & display Logout&userprofile ***//.
	
	
	//*** Logout ***//
	$(".btn-logout").on("click", function(){
		logout();
	});
	
	
});

//---------------------- Query String Value Get -----------
	function qToJ() {
	var j,q;
	q = window.location.search.replace(/\?/,'').split('&');
	j = null;
		q.forEach(function(pair) {
		if (j == null)
			j = {};
			pair = pair.split('=');
			j[pair[0]] = decodeURIComponent(pair[1] || '');
		});
		$.each(j, function(key, value){
			if(value === "" || value === null) {
				delete j[key];
			}
		});
	return j;
}
//*** Get Cookies Value*///
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
function logout()  {
		$("#div-user-msg").css("display","none");
		$("#div-login").css("display","block");
		$("#div-logout").css("display","none")
		document.cookie = "sharing_uid" + "=" +""+ ";";
		window.location.href ="index.html";
}