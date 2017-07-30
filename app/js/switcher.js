$( document ).ready(function() {
	var menu = $('.side-menu'); 
	var lines = $('.sw-all');

$('#menu_switcher').click(function(){
		if(menu.css("opacity") < '0.8') {
			menu.animate({/*"opacity": '0.8',*/ "top": '10px'}, 500);
			lines.addClass('ms_lines_closed');
			lines.removeClass('sw-all');
		}
		else {
			menu.animate({/*"top": '50px',*/ "opacity": '0'}, 400);	
			lines.removeClass('ms_lines_closed');
			lines.addClass('sw-all');
		}
	});
});