$(document).ready(function() {
	$('.lang-li').click(function(){
		var language = $(this).attr('id').split('-')[0];
		$('#set_language_select').val(language);
		$('#set_language_form').submit();
	});
	
});