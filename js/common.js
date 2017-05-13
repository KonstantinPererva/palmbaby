$(document).ready(function(){
	if($(window).width() > 767){
	$('.production-card').hover(
		function(){
			$(this).find('.addition-production').slideDown(200);
		},
		function(){
			$('.addition-production').slideUp(200);
		}
	);
	}
	
	$('.btn-menu').click(function (e){
		e.preventDefault();
		$('.menu-header').slideToggle(300);
		$(this).toggleClass('btn-close-menu');
	});	
});
