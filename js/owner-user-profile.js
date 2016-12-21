//var URL = "http://localhost/rs/api";
var URL = "http://carrent.site88.net/api";
$(document).ready(function(){

	$(function(){
		var ride_id = qToJ().ride_id;
		$("#btn-back").attr('href','ride-details.html?ride_id='+ride_id);
		$.ajax({
			type:'POST',
			url:URL+'/owner-user-profile.php',
			dataType:'json',
			data:{
				ride_id:ride_id
			},
			success:function(data){
				$("#lbl-title").html(data.user_fname+" "+data.user_lname);
				$("#lbl_name").html(data.user_fname);
				$("#lbl_mobile").html(data.user_mobile);
				$("#lbl_offerride").html(data.user_ride);
				$("#lbl_member_since").html(data.user_created);
				$("#lbl_year").html(data.user_old+" y/o");
				$("#lbl_bio").html(data.user_bio);
				$("#src_img_db").attr('src','data:image/jpeg;base64,'+data.user_avatar);
				
				
				setMusicIcon(data.music);
				setSmokIcon(data.smok);
				setChitiIcon(data.chiti);
				setPetsIcon(data.pets);
				
			},beforeSend: function() {
				$("#spinner-load").addClass("spinner");
			},
			complete: function() {
				$("#spinner-load").removeClass("spinner");
			}
		});
	});
});

function qToJ() {
	var j,q;
	q = window.location.search.replace(/\?/,'').split('&');
	j = {};
		q.forEach(function(pair) {
			pair = pair.split('=');
			j[pair[0]] = decodeURIComponent(pair[1] || '');
			
		});
		$.each(j, function(key, value){
			if(value === "" || value === null) {
				delete j[key];
			}
		});
		return  JSON.parse(JSON.stringify(j));
}