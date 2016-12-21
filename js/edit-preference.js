var URL = "http://carrent.site88.net/api";
//var  URL = "http://localhost/rs/api";
var user_id = getCookies("sharing_uid");

$(document).ready(function() {
$("#txt-user-id").val(user_id);

//---------------- Load Chattiness,Smoking, Pets, Music Option-------------
	$.ajax({
			type: 'POST',
			url: URL+'/preference.php',
			dataType: 'json',
			success : function(data) {
				console.log(data);
				$("#op-chiti").html(data.chattiness);
				$("#op-smok").html(data.smoking);
				$("#op-music").html(data.music);
				$("#op-pets").html(data.pets);
				var op = 1;
				$.ajax({
					type: 'POST',
					url: URL+'/preference.php',
					dataType: 'json',
					data: { 
						op: op,
						user_id: user_id
					},
					success: function(data) {
						console.log(data);
						$("#txt-sel-chiti").val(data.chattiness_id); // put value on text use in API
						$("#txt-sel-smok").val(data.smoking_id); // put value on text use in API
						$("#txt-sel-pets").val(data.pets_id); // put value on text use in API
						$("#txt-sel-music").val(data.music_id); // put value on text use in API
						//----Pets Label Set-------------------
						for(var i=1; i<=$(".sel-pets-a").length; i++) {
							if(data.pets_id == i) {
								$("#lbl-sel-pets").html($(".sel-pets-a li:eq("+(i-1)+")").attr('data-val'));
							}
						}
						//----Chatti Label Set-------------------
						for(var i=1; i<=$(".sel-chiti-a").length; i++) {
							if(data.chattiness_id == i) {
								$("#lbl-sel-chiti").html($(".sel-chiti-a li:eq("+(i-1)+")").attr('data-val'));
							}
						}
						//----smoking Label Set-------------------
						for(var i=1; i<=$(".sel-smok-a").length; i++) {
							if(data.smoking_id == i) {
								$("#lbl-sel-smok").html($(".sel-smok-a li:eq("+(i-1)+")").attr('data-val'));
							}
						}
						//----music Label Set-------------------
						for(var i=1; i<=$(".sel-music-a").length; i++) {
							if(data.music_id == i) {
								$("#lbl-sel-music").html($(".sel-music-a li:eq("+(i-1)+")").attr('data-val'));
							}
						}
						setMusicIcon(data.music_id);
						setSmokIcon(data.smoking_id);
						setChitiIcon(data.chattiness_id);
						setPetsIcon(data.pets_id);
					}
				});
			},
			beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			},
			error: function(data) {}
		});
		
//--------- Edit Preferences------------------- 
	
	$(".chiti").on("click", function(){
		$("#op-chiti").toggle();
		$("#op-smok").hide();
		$("#op-pets").hide();
		$("#op-music").hide();
	});
	
	$(".smok").on("click", function(){
		$("#op-smok").toggle();
		$("#op-chiti").hide();
		$("#op-pets").hide();
		$("#op-music").hide();
	});
	$(".op-toggle-smok").on("click", function(){
		$("#op-smok").toggle();
		
	});
	
	$(".pets").on("click", function(){
		$("#op-pets").toggle();
		$("#op-chiti").hide();
		$("#op-smok").hide();
		$("#op-music").hide();
	});
	$(".op-toggle-pets").on("click", function(){
		$("#op-pets").toggle();
		
	});
	
	$(".music").on("click", function(){
		$("#op-music").toggle();
		$("#op-chiti").hide();
		$("#op-smok").hide();
		$("#op-pets").hide();
	});

	$(document).on("click", "#op-chiti a, #op-smok a, #op-pets a,#op-music a", function() {
		$("#op-chiti").css('display','none');
		$("#op-smok").css('display','none');
		$("#op-pets").css('display','none');
		$("#op-music").css('display','none');
	}); 
//----Set Selected Value 
	$(document).on("click","#op-chiti a",function() {
		$("#lbl-sel-chiti").html($(this).text());
	});
	$(document).on("click","#op-smok a",function() {
		$("#lbl-sel-smok").html($(this).text());
	});
	$(document).on("click","#op-pets a",function() {
		$("#lbl-sel-pets").html($(this).text());
	});
	$(document).on("click","#op-music a",function() {
		$("#lbl-sel-music").html($(this).text());
	});
	
//------ After Selection Store in srote seletec value in TextBox For Ajax -----------------
	$(document).on("click", ".sel-chiti-a li", function(){
			$("#txt-sel-chiti").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".sel-smok-a li", function(){
			$("#txt-sel-smok").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".sel-pets-a li", function(){
			$("#txt-sel-pets").val($(this).val()); // put value on text use in API
	});
	$(document).on("click", ".sel-music-a li", function(){
			$("#txt-sel-music").val($(this).val()); // put value on text use in API
	});

	//------ Set Icon Based on Select-----------------
	$(document).on("click", ".sel-chiti-a li", function(){
			$("#txt-sel-chiti").val($(this).val()); // put value on text use in API
			if($(this).val() == 1){
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_no.png");
			}else if($(this).val() == 2){
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_neutral.png");
			}else if($(this).val() == 3){
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_ok.png");
			}
	});
	$(document).on("click", ".sel-smok-a li", function(){

			$("#txt-sel-smok").val($(this).val()); // put value on text use in API
			if($(this).val() == 1){
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_no.png");
			}else if($(this).val() == 2){
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_neutral.png");
			}else if($(this).val() == 3){
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_ok.png");
			}
	});
	$(document).on("click", ".sel-pets-a li", function(){
			//alert($(this).val());
			$("#txt-sel-pets").val($(this).val()); // put value on text use in API
			if($(this).val() == 1){
				$("#src_pets").attr("src","img/Pets/ic_picto_dog_no.png");
			}else if($(this).val() == 2){
				$("#src_pets").attr("src","img/Pets/ic_picto_dog_neutral.png");
			}else if($(this).val() == 3){
				$("#src_pets").attr("src","img/Pets/ic_picto_dog_ok.png");
			}
	});
	$(document).on("click", ".sel-music-a li", function(){
			$("#txt-sel-music").val($(this).val()); // put value on text use in API
			if($(this).val() == 1){
				$("#src_music").attr("src","img/Music/ic_picto_music_no.png");
			}else if($(this).val() == 2){
				$("#src_music").attr("src","img/Music/ic_picto_music_neutral.png");
			}else if($(this).val() == 3){
				$("#src_music").attr("src","img/Music/ic_picto_music_ok.png");
			}
	});
	 
	 
});

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
//--- Set Music Icon Based On Database----------------	 
	function setMusicIcon(id) {
		switch(id) {
			case '1':
				$("#src_music").attr("src","img/Music/ic_picto_music_no.png");
				break;
			case '2':
				$("#src_music").attr("src","img/Music/ic_picto_music_neutral.png");
			break;
			case '3':
				$("#src_music").attr("src","img/Music/ic_picto_music_ok.png");
			break;
		}
	}
	//--- Set Music Icon Based On Database----------------	 
	function setChitiIcon(id) {
		switch(id) {
			case '1':
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_no.png");
				break;
			case '2':
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_neutral.png");
			break;
			case '3':
				$("#src_chiti").attr("src","img/Chittiness/ic_picto_music_ok.png");
			break;
		}
	}
	//--- Set Smoking Icon Based On Database----------------	 
	function setSmokIcon(id) {
		switch(id) {
			case '1':
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_no.png");
				break;
			case '2':
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_neutral.png");
			break;
			case '3':
				$("#src_smoke").attr("src","img/Smoking/ic_picto_smoke_ok.png");
			break;
		}
	}
	//--- Set Music Icon Based On Database----------------	 
	function setPetsIcon(id) {
		switch(id) {
			case '1':
				$("#src_pets").attr("src","img/Pets/ic_picto_dog_no.png");
				break;
			case '2':
				$("#src_pets").attr("src","/img/Pets/ic_picto_dog_neutral.png");
			break;
			case '3':
				$("#src_pets").attr("src","img/Pets/ic_picto_dog_ok.png");
			break;
		}
	}