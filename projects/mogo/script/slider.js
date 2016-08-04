
var i=2;
	$(".slider_right").click(function(){
		i++;

		if (i==3) {
			$(".slider_right").fadeOut();
			$(".slide_1").fadeOut(500);
			$(".slide_2").fadeOut(500);
			$(".slide_3").fadeIn(500);
		}

		else if (i==2) {
			$(".slider_left").fadeIn(500);
			$(".slide_1").fadeOut(500);
			$(".slide_2").fadeIn(500);
			$(".slide_3").fadeOut(500);
		}

		else (i=3);
	})

	$(".slider_left").click(function(){
		i--;

		if (i==2) {
			$(".slider_right").fadeIn(500);
			$(".slide_1").fadeOut(500);
			$(".slide_2").fadeIn(500);
			$(".slide_3").fadeOut(500);
		}

		else if (i==1) {
			$(".slider_left").fadeOut();
			$(".slide_1").fadeIn(500);
			$(".slide_2").fadeOut(500);
			$(".slide_3").fadeOut(500);
			i=1;
		}

		else (i=1);
	})