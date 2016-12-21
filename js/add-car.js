 var uid = getCookies("sharing_uid");
var URL = "http://carrent.site88.net/api";
 //var URL = "http://localhost/rs/api";

 $(document).ready(function() { 
	$("#txt-user_id").val(uid); // Login user is Set using cookies
//------Load car Brand, color, seats --------------------- 
		$.ajax({
			type: 'POST',
			url: URL+'/car_brand.php',
			dataType: 'json',
			success: function(data) {
				$("#op-make-car").html(data.brand_op);
				$("#op-seat-car").html(data.seats_op);
				$("#op-color-car").html(data.car_color_op);
				$("#op-type-car").html(data.car_type_op);
				$("#car_avtar").attr('src','data:image/jpeg;base64,'+data.car_avatar);				
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function(textStatus) {
				console.log(textStatus);
			}
		});
		
//--Car Option Display None When Click Aonther------------------ 
	$(document).on("click", "#op-make-car a,#op-modal-car a,#op-seat-car a,#op-color-car a,#op-type-car a", function(){
		$("#op-make-car").hide();
		$("#op-modal-car").hide();
		$("#op-seat-car").hide();
		$("#op-color-car").hide();
		$("#op-type-car").hide();
	});
//--- Make Label display none -------------------------
 	$(document).on("click","#op-make-car a", function() {
		$(".car-make-lbl").css('display','none');
	});
	
	$(".make-car").on("click", function() {
		$("#op-make-car").toggle();
	 	$("#op-modal-car").hide();
		$("#op-seat-car").hide();
		$("#op-color-car").hide();
		$("#op-type-car").hide();
	});
 
	 $(".modal-car").on("click", function() {
		$("#op-modal-car").toggle();
		$("#op-make-car").hide();
		$("#op-seat-car").hide();
		$("#op-color-car").hide();
		$("#op-type-car").hide();
	});
	
	$(".seat-car").on("click", function() {
		$("#op-seat-car").toggle();
		$("#op-make-car").hide();
		$("#op-modal-car").hide();
		$("#op-color-car").hide();
		$("#op-type-car").hide();
	});
	 
	$(".color-car").on("click", function() {
		$("#op-color-car").toggle();
		$("#op-make-car").hide();
		$("#op-modal-car").hide();
		$("#op-seat-car").hide();
		$("#op-type-car").hide();
	});
	 
	$(".type-car").on("click", function() {
		$("#op-type-car").toggle();
		$("#op-make-car").hide();
		$("#op-modal-car").hide();
		$("#op-seat-car").hide();
		$("#op-color-car").hide();
	});
	
//----------- Selected car Make show on click car brand load Add Car Details..--------------
	$(document).on("click","#op-make-car a li",function() {
		 $("#sel-car-make").html($(this).text());
		$(".car-make-lbl").css('display','none');
		var brand = $(this).val();
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
				$("#sel-modal").html("");
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
	});
	
//-------- When Select display on bottom of selection value as selected--------------------
	$(document).on("click","#op-seat-car a",function() {
		$("#sel-seat").html($(this).text());
	
	});
	$(document).on("click","#op-color-car a",function() {
		$("#sel-color").html($(this).text());
		$(".car-color-lbl").css('display','none');
	});
	$(document).on("click","#op-type-car a",function() {
		$("#sel-type").html($(this).text());
		$(".car-type-lbl").css('display','none');
	});
	$(document).on("click","#op-modal-car a",function() {
		$("#sel-modal").html($(this).text());
		$(".car-modal-lbl").css('display','none');
	});
	
//------ After Selection Store in srote seletec value in TextBox For Ajax -----------------
	$(document).on("click", ".brand-a li", function(){
			$("#txt-sel-brand").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".modal-a li", function(){
			$("#txt-sel-modal").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".seats-a li", function(){
			$("#txt-sel-seats").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".car-color-a li", function(){
			$("#txt-sel-car-color").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".car-type-a li", function(){
			$("#txt-sel-car-type").val($(this).val()); // put value on text use in API
	});
	
 });
 
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