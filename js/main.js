$(function(){

	$('.menutoggle').on('click', function(){

		$('.topmenu').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style')
			}
		});
	});
});