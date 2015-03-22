
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


$("#slist_calendar_ok").click(function(){

});