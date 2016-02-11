
$(document).ready(function(){
	$("input[name='Vikings@Packers']").change(function(){
		var selected = $(this).val();
		var group = $("input[name='Vikings@Packers']");
		for (var i = group.length - 1; i >= 0; i--) {
			if(group[i].value != selected){
				$("#"+group[i].value).css({
					"font-weight":"normal"
				})
			}
		}
		$("#"+selected).css({
			"font-weight":"bold"
		})
	}); 
});