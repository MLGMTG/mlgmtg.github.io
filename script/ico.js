
	  // Скрипт появления/скрытия иконок социальных сетей и формы отправки почтовых сообщений.

	  $(".fio").mouseover(function(){$(".socio").removeClass("block_up").addClass("block_down")});
	  $(".socio").mouseleave(function(){$(".socio").addClass("block_up").removeClass("block_down")});

		$(".email_ico").click(function(event){
			event.preventDefault();
		$("form").show(500);
			});

		$(".email_ico_mob").click(function(event){
			event.preventDefault();
		$("form").slideDown(800);
			});

		$(".form_close").click(function(){
		$("form").slideUp(800);	
			});

		$(".email").hover(function(){
		$(".email_ico").show(1000);
			});


