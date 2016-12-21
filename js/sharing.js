var uid = getCookies("sharing_uid");
var URL = "http://carrent.site88.net/api";
//var  URL = "http://localhost/rs/api";

$(document).ready(function() { 

//------Load all RideOther Option Like Luaage,Leave and Detopur Option----
	$("#txt-user_id").val(uid); //Login user is Set using cookies
		$.ajax({
			type:'POST',
			url: URL+'/luggage.php',
			dataType: 'json',
			success : function(data) {
				$("#ul-luggage").html(data.luggage_op);
					$("#will-leave-div").html(data.leave_op);
					$("#make-detour-div").html(data.detour_op);
				},
				error: function(textStatus) {}
		});
		
//----- Time Dropper Display-------
		$(function(){
			if(uid=="") {
				$("#car_show").hide();
			} 
			else { 
				$.ajax({
					type:'POST',
					url: URL+'/user_car_deatils.php',
					dataType: 'json',
					data: {
						user_id: uid
					},
					success: function(data) {
						if(data.cnt_op == 1) {
							$("#ul-car-op").html(data.car_op);
							$("#car_show").show();
						}
					}
				});
			
			}
			$("#dt-return-time").timeDropper();
			$("#dt-dept-time").timeDropper();
			if(qToJ().div == 2) {
				$("#btn-ride-offer-li").trigger('click');
			}
			if(qToJ().div == 1) {
				$("#btn-ride-find-li").trigger('click');
			}
		});
				
//---- Sharing Div Hide show --------------//
	$("#li-rent-car").on("click", function() {
		$("#div-rent-car").fadeIn(300).show();
	});
	$("#btn-ride-offer-li").on("click", function(){
		$("#div-findride").hide();
		$("#ride-step2").hide();
		$("#div-offerride").fadeIn(300).show();
		$("#ride-result").hide();
		$("#ride-result-data").hide();
		$("#head-title").html("Offer a ride");
		$("#offer-color").css("color","rgb(249, 103, 72)");
		$("#find-color").css("color","rgb(127,127,127)");
	});
	$("#btn-ride-find-li").on("click", function(){
		$("#div-findride").fadeIn(300).show();
		$("#ride-step2").hide();
		$("#div-offerride").hide();
		$("#ride-result").hide();
		$("#ride-result-data").hide();
		$("#head-title").html("Find a ride");
		$("#find-color").css("color","rgb(249, 103, 72)");
		$("#offer-color").css("color","rgb(127,127,127)");
	});
	
	$("#btn-step1").on("click", function(){
	var  f = $("#form_city_offer").val(),
		 t = $("#to_city_offer").val();	 
		$("#div-offerride").hide();
		$(".page-head").hide();
		$("#back-div").show();
		$("#ride-step2").fadeIn(300).show();
		$("#route_name").html(f+" >> "+t);
		$("#route_title").html(f+" >> "+t);
	});
	
	$("#btn-back").on("click", function(){
		$("#div-offerride").show();
		$("#back-div").hide();
		$(".page-head").show();
		$("#ride-step2").hide();
	});
	
	$("#route_title").on("click", function(){
		$("#btn-back").trigger('click');
	});
//---- Ride Other Details Like Leavetime ,Luggage, Detour Option-------//
	 
	$(".lug-size").on("click", function() {
		$("#ul-luggage").toggle();
		$("#will-leave-div").hide();
		$("#make-detour-div").hide();
		$("#ul-car-op").hide();
	});
	$(".will-leave").on("click", function(){
		$("#will-leave-div").toggle();
		$("#make-detour-div").hide();
		$("#ul-luggage").hide();
		$("#ul-car-op").hide();
	});
	$(".make-detour").on("click", function(){
		$("#make-detour-div").toggle();
		$("#ul-luggage").hide();
		$("#will-leave-div").hide();
		$("#ul-car-op").hide();
	});
	
	$(document).on("click", "#ul-luggage a, #will-leave-div a, #make-detour-div a, #ul-car-op a",function(){
		$("#ul-luggage").css('display', 'none');
		$("#will-leave-div").css('display', 'none');
		$("#make-detour-div").css('display', 'none');
		$("#ul-car-op").css('display', 'none');
	});
	
	$(".car-op").on("click", function(){
		$("#will-leave-div").hide();
		$("#make-detour-div").hide();
		$("#ul-luggage").hide();
		$("#ul-car-op").toggle();
	});
	
	$(document).on("click","#make-detour-div a",function() {
		$("#sel-make-detour").html($(this).text());
	});
	$(document).on("click", ".lg-a li", function(){
			$("#txt-lg-size").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".leave-a li", function(){
			$("#txt-will-leave").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".detour-a li", function(){
			$("#txt-sel-make-detour").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".carr-a li", function(){
			$("#txt-car-id").val($(this).val()); // put value on text use in API
	});
	$(document).on("click","#ul-luggage a",function() {
		$("#sel-ul-luggage").html($(this).text());
	
	});
	$(document).on("click","#ul-car-op a",function() {
		$("#sel-car").html($(this).text());
	
	});
	
	$(document).on("click","#will-leave-div a",function() {
		$("#sel-will-leave").html($(this).text());
		$("#txt-sel-make-detour").val($(this).text());
	});
	
//--------- Price Plus Minus ------------------------
	$("#btn-price-plus").on("click", function() {
		var price_plus= parseInt($("#lbl-price").val());
		price_plus = price_plus + 10;
		$("#lbl-price").val(price_plus);
	});
	$("#btn-price-minus").on("click", function() {
		var price_minus= parseInt($("#lbl-price").val());
		if(price_minus > 10) {
			price_minus = price_minus - 10;
			$("#lbl-price").val(price_minus);
		}
	});
	
//------Seat Plus Minus-------------------------------
	$("#btn-seat-plus").on("click", function() {
		var seat_minus= parseInt($("#lbl-seat").text());
		seat_minus = seat_minus + 1;
		$("#lbl-seat").text(seat_minus);
	});
	$("#btn-seat-minus").on("click", function(){
		var seat_minus = parseInt($("#lbl-seat").text());
		if(seat_minus > 1 ) {
			seat_minus = seat_minus - 1;
		$("#lbl-seat").text(seat_minus);
		}
	});
//------------ Round trip ----------------------------
	var tmp = 0; 
	$("#trip-type").on("change", function(){
		if(tmp == 0) {
			$("#dt-return").hide();
			$("#re-dat").hide();
			$("#dt-return").val("1990-10-10");
			tmp=1;
		}
		else {
			$("#dt-return").show();
			$("#re-dat").show();
				$("#dt-return").val("");
			tmp=0;
		}
	});
//---------- Route Auto ---------------------------
	$("#to_city_offer").focusout(function(){
		$("#div-route").fadeIn(800)
						.css("display","block");
	
	});
	 
	
	$(function(){
		if(qToJ().back=="1"){
			$("#ride-result-data").html("");
					$("#ride-result").html("");
			$("#ride-result").html(sessionStorage.getItem("ride-result-old"));
			$("#ride-result-data").html(sessionStorage.getItem("ride-result-data-old"));
		}
	});
});

//-----Get Cookies Value ------------------------
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