	$(".panel_1_content").slideDown(100);
	$(".panel_2_content").slideUp(100);
	$(".panel_3_content").slideUp(100);

	$(".panel_1_header").click(function (){
		$(".panel_1_content").slideDown(500);
		$(".panel_2_content").slideUp(500);
		$(".panel_3_content").slideUp(500);
		$(".acc_img_1").fadeIn(500);
		$(".acc_img_2").fadeOut(500);
		$(".acc_img_3").fadeOut(500);
	});

	$(".panel_2_header").click(function (){
		$(".panel_2_content").slideDown(500);
		$(".panel_1_content").slideUp(500);
		$(".panel_3_content").slideUp(500);
		$(".acc_img_1").fadeOut(500);
		$(".acc_img_2").fadeIn(500);
		$(".acc_img_3").fadeOut(500);

	});

	$(".panel_3_header").click(function (){
		$(".panel_3_content").slideDown(500);
		$(".panel_1_content").slideUp(500);
		$(".panel_2_content").slideUp(500);
		$(".acc_img_1").fadeOut(500);
		$(".acc_img_2").fadeOut(500);
		$(".acc_img_3").fadeIn(500);

	});