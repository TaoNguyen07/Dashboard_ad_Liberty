$(document).ready(function(){
	$('.news-top').click(function(){
		if ($(window).width() < 993) {
			$('.menu-top-child').toggle();
		}
	});
	$('.menu-dropdown-respon').click(function(){
		if ($(window).width() < 768) {
			$('.menu-dropdown-respon-1').toggle();
			$('.menu-dropdown-respon-1-1').show();
		}
	});
	$('.menu-dropdown-respon-2').click(function(){
		if ($(window).width() < 768) {
			$('.menu-dropdown-respon-2-1').toggle();
			$('.menu-dropdown-respon-2-1-1').show();
		}
	});
	$('.menu-dropdown-2').click(function(){
		if ($(window).width() < 993) {
			$('.menu-dropdown-2-1').toggle();
			$('.menu-dropdown-2-1-1').show();
		}
	});
	$('.menu-dropdown-1').click(function(){
		if ($(window).width() < 993) {
			$('.menu-child').toggle();
			$('.child-child1').show();
		}
	});

});

// quy đinh kích thước màng hình khi click thanh menu co dãn tuy thích