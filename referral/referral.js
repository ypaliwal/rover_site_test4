$(document).ready(function() {
	var addFormInputs 
		= '<div class="theForm row">'
		+ '<p class="red col-md-2 col-md-offset-2 text-left">FRIEND\'S EMAIL:</p>'
		+ '<input class="col-md-4 formInput" type="text" placeholder="email address">'
		+ '</div>';

	$(".addMore").click(function() {
		for (var i = 0; i < 5; i++) {
			$("#refFormInputs").append(addFormInputs);	
		}
		
	});
	


});