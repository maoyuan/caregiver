
$('#slist_start_calendar').datetimepicker({
	format: 'ddd, MMM D YYYY',
	// icons: {
	// 	time: "fa fa-clock-o",
	// 	date: "fa fa-calendar",
	// 	up: "fa fa-arrow-up",
	// 	down: "fa fa-arrow-down"
	// }
});

$('#slist_end_calendar').datetimepicker({format: 'ddd, MMM D YYYY'});


// clear two calendar selection
$("#slist_calendar_cancel").click(function() {
	$("#slist_start_date").val("");
	$("#slist_end_date").val("");
});

$('#slist_shoppling_list_table').hide();

$("#slist_calendar_ok").click(function(){
	// console.log($('#slist_start_calendar').data("DateTimePicker").date().format('MM-DD-YYYY'));

	$.getJSON("./data.json", function(json) {
		var htmlCode = "";
		$("#slist_recipe_table").empty();
		for (var i = 0; i < json.length; i++) {
			var rname = json[i].name;
			htmlCode += "<tr><td>" + (i + 1) + ". " + rname + "</td><tr/>";
		}
		$("#slist_recipe_table").append(htmlCode);

		$('#slist_shoppling_list_table').show();
	});
});