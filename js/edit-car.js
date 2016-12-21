var user_id = getCookies("sharing_uid"); 
var URL = "http://carrent.site88.net/api";
//var URL = "http://localhost/rs/api"

$(document).ready(function() {
	$("#txt-user_id").val(user_id);
	$("#txt-car_id").val(qToJ().car_id);
	var car_id =qToJ().car_id,
		op = 1,
		car_modal = "",
		car_modal_id = "";
//----------- Load USer Car Detail-------------- 		
	$.ajax({
		type:'POST',
		url: URL+'/edit-car.php',
		data: {
			op:op,
			car_id: car_id,
			user_id:user_id
		},
		success: function(data) {
			console.log(data);
			 $("#sel-car-make").html(data.car_brand);
			$(".car-make-lbl").css('display','none');
			$("#sel-color").html(data.car_color);
			$(".car-color-lbl").css('display','none');
			$("#sel-type").html(data.car_type);
			$(".car-type-lbl").css('display','none');
			$("#sel-seat").html(data.car_seats);
			$("#txt-sel-brand").val(data.car_brand_id);
			car_modal = data.car_modal;
			car_modal_id = data.car_modal_id;
			$("#txt-sel-seats").val(data.car_seats);
			$("#txt-sel-car-color").val(data.car_color_id);
			$("#txt-sel-car-type").val(data.car_type_id);
			$("#car_avtar").attr('src','data:image/jpeg;base64,'+data.car_avatar);
			$("#src_img_db").val("");
			$("#src_img_db").val(data.car_avatar);
			var brand = data.car_brand_id;
		//---- Load Car Modal Type Based on Car Brand Type
					$.ajax({
					type: 'POST',
					url: URL+'/car_name.php',
					dataType: 'json',
					data: {
						brand: brand
					},
					success : function(data) {
						$(".car-modal-lbl").css('display','block');
						$("#op-modal-car").html("");
						$("#op-modal-car").html(data.car_modal_op);
						$("#sel-modal").html(car_modal);
						$("#txt-sel-modal").val(car_modal_id); // put value on text use in API
						$(".car-modal-lbl").css('display','none');
					},
					beforeSend: function() {
						$("#spinner-load").addClass("spinner");
					},
					complete: function() {	
						$("#spinner-load").removeClass("spinner");
						
					
					},
					error: function(data) {
					}
				});
		},
		error: function(textStatus) {
		}
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