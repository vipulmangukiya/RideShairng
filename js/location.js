var user_id = getCookies("sharing_uid");
var URL = "http://carrent.site88.net/api";
// var URL = "http://localhost/rs/api";

var  app = {
			initialize: function() {
				this.bindEvents();
			},
			bindEvents: function() {
				document.addEventListener('deviceready',this.onDeviceReady, false);
			},
			onDeviceReady: function() {
				navigator.geolocation.getCurrentPosition(app.onSuccess,app.Error,{enableHighAccuracy: true });
				// var btn = document.getElementById('btn-share');
					// btn.addEventListener("click", app.getCurrent(this,value), false);
			},
			onSuccess: function(position) {
				var longitude = position.coords.longitude,
					latitude = position.coords.latitude;
					//---- Send Update------
					var xhr = new XMLHttpRequest();
						xhr.open('GET', URL+'/location_update.php?longitude='+longitude+'&latitude='+latitude+'&user_id='+user_id);
						xhr.onload = function() {
							if(xhr.status == 200) {
								//alert('Response'+xhr.responseText);
							} else{ //alert("fail");
						}
						};xhr.send();
			},
			Error: function(error) {
				//alert(error.message);
			}
		};

//-------Get Postion From Database----------------------------
	function getPosition(user_id) {
		var xhr = new XMLHttpRequest();
			xhr.open('GET', URL+'/location_get.php?user_id='+user_id);
				xhr.onload = function() {
					if(xhr.status == 200) {
						
						var arr = JSON.parse(xhr.responseText),
							longitude = arr['longitude'],
							latitude = arr['latitude'],
							msg		= arr['msg'];
								$(".error").html(msg).fadeIn(400).delay(3000).fadeOut(400);
						watch(latitude,longitude);
					} else{ alert("fail");}
				};xhr.send();	
				}
	//---- wacth Current Location---------------------	
		function watch(latitude,longitude) {
			var latLong = new google.maps.LatLng(latitude,longitude);
			var mapOptions = {
						center: latLong,
						zoom: 13,
						mapTypeId: google.maps.MapTypeId.ROADMAP
				};
			var map = new google.maps.Map(document.getElementById("map"),mapOptions);
			var marker = new google.maps.Marker({
				position: latLong,
				map: map,
				title: 'Vipz'
			});
		//getPosition(user_id);
		}
		
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