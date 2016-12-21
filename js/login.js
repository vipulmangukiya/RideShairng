//*** Login Modal****//
$(document).ready(function(){

	$('#btn-toggle').on('click', function() { 
		$('#myNav')
			.toggleClass('toggle-nav')
				.css('transition', '.5s linear');
	});	
	 
	$(".btn-toggle-close").on("click", function(){
			 $('#myNav')
				.toggleClass('toggle-nav')
					.css('transition', '.5s linear');
		});


		$(function(){
	var $formlogin = $('#login-form');
	var $formlost = $('#lost-form');
	var $formRegister = $('#register-form');
	var $divForms = $('#div-forms');
	var $modalAnimateTime = 300;
	var $msgAnimateTime = 150;
	var $msgShowTime = 2000;
	
		$("form").submit(function(){
		
			switch(this.id){
				case "login-form" :
					var $lg_username=$('#login_username').val();
					var $lg_password=$('#login_password').val();
					if($lg_username == "ERROR"){
						msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");						
					}else{
						msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login ok");						
					}
					return false;
					break;
				case "lost-form" :
				
					var $ls_email=$('#lost-email').val();
					if($ls_email == "ERROR"){
						msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");						
					}else{
						msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send ok");						
					}
					return false;
					break;
				case "register-form" :
					
					var $rg_username=$('#register_username').val();
					var $rg_email=$('#register_email').val();
					var $lg_register=$('#register_password').val();
					if($rg_username == "ERROR"){
						msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");						
					}else{
						msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register ok");						
					}
					return false;
					break;
				default:
					return false;
			}
			return false;
		});
		
		$('#login_register_btn').click(function(){modalAnimate($formlogin, $formRegister); });
		$('#register_login_btn').click(function(){modalAnimate($formRegister, $formlogin); });
		$('#login_lost_btn').click(function(){modalAnimate($formlogin, $formlost); });
		$('#lost_login_btn').click(function(){modalAnimate($formlost, $formlogin); });
		$('#lost_register_btn').click(function(){modalAnimate($formlost, $formRegister); });
		$('#register_lost_btn').click(function(){modalAnimate($formRegister, $formlost); });
		
		
		function modalAnimate ($oldForm, $newForm){
			var $oldH = $oldForm.height();
			var $newH = $newForm.height();
			$divForms.css("height", $oldH);
			$oldForm.fadeToggle($modalAnimateTime, function(){
				$divForms.animate({height: $newH}, $modalAnimateTime, function(){
					$newForm.fadeToggle($modalAnimateTime);
				});
			});
		}
		
		function msgFade($msgId, $msgText){
			$msgId.fadeOut($msgAnimateTime, function(){
				$(this).text($msgText).fadeIn($msgAnimateTime);
			});
		}
		
		function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText){
			var $msgOld = $divTag.text();
			msgFade($textTag, $msgText);
			$divTag.addClass($divClass);
			$iconTag.removeClass("glyphicon-chevron-right");
			$iconTag.addClass($iconClass + " " + $divClass);
			setTimeout(function(){
				msgFade($textTag, $msgOld);
				$divTag.removeClass($divClass);
				$iconTag.addClass("glyphicon-chevron-right");
				$iconTag.removeClass($iconClass + " " + $divClass);
			}, $msgShowTime);
		}
	});
	
});

