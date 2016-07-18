	// Скрипт для переключателя полей в шапке планшетной и мобильной версий
	var i=1; // Глобальный счетчик для слайдера-переключателя
	$(".ico_switch").hover(function(){$(".ico_switch").removeClass("switch_right").addClass("switch_left")}, function(){
		$(".ico_switch").removeClass("switch_left").addClass("switch_right")
	})
	$(".ico_switch").click(function(){

		if (i==1) {
			$(".email_ico_mob").hide(0);
			$(".info_mob").css({"display":"inline-block", "vertical-align":"top"}).show();
			i++;
		}
		
		else  if (i==2){
			$(".info_mob").hide();
			$(".work_mob").css({"display":"inline-block", "vertical-align":"top"}).show();
			i++;
		}

		else if (i==3) {
			$(".work_mob").hide();
			$(".email_ico_mob").show();
			i=1;	
		}
	});