var i=100;

var arr=[];
arr[0]=$(".sl_img_1");
arr[1]=$(".sl_img_2");
arr[2]=$(".sl_img_3");

var arr_p=[];
arr_p[0]=$(".sl_text_1");
arr_p[1]=$(".sl_text_2");
arr_p[2]=$(".sl_text_3");

$(".sl_right").click(function(){
		i++;
		if ((i%3)==2) {
			arr[1].toggleClass("active").toggleClass("over");
      arr[2].toggleClass("active").toggleClass("over");
      arr_p[1].hide();
      arr_p[2].show();
		}

		else if ((i%3)==0) {
			arr[2].toggleClass("active").toggleClass("over");
      arr[0].toggleClass("active").toggleClass("over");
      arr_p[2].hide();
      arr_p[0].show();
		}		
		else if ((i%3)==1) {
			arr[0].toggleClass("active").toggleClass("over");
      arr[1].toggleClass("active").toggleClass("over");
      arr_p[0].hide();
      arr_p[1].show();
		}

});

$(".sl_left").click(function(){
		i--;
		if ((i%3)==0) {
			arr[0].toggleClass("active").toggleClass("over");
      arr[1].toggleClass("active").toggleClass("over");
      arr_p[1].hide();
      arr_p[0].show();
		}

		if ((i%3)==1) {
			arr[1].toggleClass("active").toggleClass("over");
      arr[2].toggleClass("active").toggleClass("over");
      arr_p[2].hide();
      arr_p[1].show();
		}

		if ((i%3)==2) {
			arr[2].toggleClass("active").toggleClass("over");
      arr[0].toggleClass("active").toggleClass("over");
      arr_p[0].hide();
      arr_p[2].show();

		}
})