		// Скрипт для изменения инструментов разработки
		$(".tools").mousemove(function() {
			$(".tools").fadeOut(2000);
			$(".tr_tools").fadeIn(2000);
			setTimeout(function(){
				$(".tr_html_descr").addClass("dscr_left");
				$(".tr_html_descr").fadeIn(2000);

				$(".tr_js_descr").addClass("dscr_top");
				$(".tr_js_descr").fadeIn(2000);

				$(".tr_css_descr").addClass("dscr_right");
				$(".tr_css_descr").fadeIn(2000);
			}, 2000);
			setTimeout(function(){
				$(".tr_html_descr").removeClass("dscr_left");
				$(".tr_js_descr").removeClass("dscr_top");
				$(".tr_css_descr").removeClass("dscr_right");
			}, 4000);
		});
