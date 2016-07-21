$(document).ready(function() {
	var addFormInputs 
		= '<div class="theForm row">'
		+ '<p class="red col-md-2 text-left">FRIEND\'S EMAIL:</p>'
		+ '<input class="col-md-3 formInput" type="text" placeholder="email address">'
		+ '<p class="red col-md-2 col-md-offset-1 text-left">FRIEND\'S EMAIL:</p>'
		+ '<input class="col-md-3 formInput" type="text" placeholder="email address">'
		+ '</div>';



	$(".addMore").click(function() {
		$("#refFormInputs").append(addFormInputs);
	});
	


});