$(document).ready(function() {
	$("#nav_list").click(function(event){
		var x = event.target.title;//this.getAttribute("title");
		alert(x);
	})
	$.getJSON("json_files/chua.json", function(data){
		$.each(date, function()	{
			$.each(this, function(key, value)	{
				$("#div1").append(
					"Month: " + value
				)
			})
		})
		
	});
}); // end ready