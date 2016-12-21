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
				$("#src_chitti").attr("src","img/Chittiness/ic_picto_music_no.png");
				break;
			case '2':
				$("#src_chitti").attr("src","img/Chittiness/ic_picto_music_neutral.png");
			break;
			case '3':
				$("#src_chitti").attr("src","img/Chittiness/ic_picto_music_ok.png");
			break;
		}
	}
	//--- Set Smoking Icon Based On Database----------------	 
	function setSmokIcon(id) {
		switch(id) {
			case '1':
				$("#src_smoking").attr("src","img/Smoking/ic_picto_smoke_no.png");
				break;
			case '2':
				$("#src_smoking").attr("src","img/Smoking/ic_picto_smoke_neutral.png");
			break;
			case '3':
				$("#src_smoking").attr("src","img/Smoking/ic_picto_smoke_ok.png");
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