$( document ).ready(function() {
	var menu = $('.side-menu'); 
	var lines = $('.sw-all');

$('#menu_switcher').click(function(){
		if(menu.css("opacity") < '0.8') {
			lines.removeClass('sw-all');
			lines.addClass('ms_lines_closed');
			menu.animate({"opacity": '0.8', "top": '10px'}, 500);
		}
		else {
			lines.addClass('sw-all');
			lines.removeClass('ms_lines_closed');
			menu.animate({"top": '50px', "opacity": '0'}, 400);	
		}
	});
});



// $l_grey: #EFECEC
// $d_grey: #D0CDCD
// $white: #FFFFFF
// $dd_grey: #757474
// $ddd_grey: #252525
// header
// 	width: 100%
// .row
// 	margin: 0
// 	padding: 0
// .logo
// 	position: absolute
// 	height: 20vh
// 	width: 100%
// 	padding: 0
// 	margin-top: 50px
// 	z-index: 999
// 	&>.row
// 		height: inherit
// 		width: 100%
// 		&>.col-md-6
// 			height: inherit
// 			display: flex
// 			align-items: center
// 			font-family: 'Kaushan Script', cursive
// 			.logotype
// 				color: $white
// 				font-size: 15vh
// 				margin-left: 10%
// 				width: 100%
			
// .content>img
// 	width: 100%
// 	position: fixed
// .side-menu
// 	height: 20vh
// 	width: 20%
// 	left: 77%
// 	top: 70px
// 	background-color: #fff
// 	padding: 0
// 	margin: 0
// 	opacity: 0
// 	.side-list
// 		display: flex
// 		flex-wrap: wrap
// 		height: 20vh
// 		text-decoration: none
// 		list-style-type: none
// 		margin: 0
// 		padding: 0
// 		align-items: center
// 		&>li
// 			width: 100%
// 			display: flex
// 			justify-content: flex-end
// 			padding-right: 30px
// 			font-family: 'Kaushan Script', cursive
// 			a
// 				text-decoration: none
// 				color: $dd_grey
// 				&:hover
// 					color: $ddd_grey
// .photos
// 	position: absolute
// .tz-gallery>.row
// 	margin-top: 59%
// .sw_cher
// 	height: 100%
// 	width: 100%
// 	display: flex
// 	justify-content: flex-end
// 	.menu-icon
// 		height: 70%
// 		width: 14vh
// 		display: flex
// 		flex-wrap: wrap
// 		align-items: center
// 		.line-1
// 			height: 4px
// 			width: 20vh
// 			background-color: $d_grey
// 		.line-2
// 			height: 4px
// 			width: 20vh
// 			background-color: $d_grey
// 		.line-3
// 			height: 4px
// 			width: 20vh
// 			background-color: $d_grey
// 			top: -100%








