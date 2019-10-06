 $(function(){

 	vitriedu = $('#khoiedu').offset().top;
 	console.log(vitriedu);

 	$('.xuong').click(function() {
 		$('body,html').animate({scrollTop:vitriedu});
 	});
})  
 