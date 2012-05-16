function tempDrawDetailsChart(choice) {
	var day = new Object();
	day['04/01/12'] = 25;
	day['04/02/12'] = 22;
	day['04/03/12'] = 20;
	day['04/04/12'] = 28;
	day['04/05/12'] = 24;
	day['04/06/12'] = 30;
	var week = new Object();
	week['02/20/12'] = 147;
	week['02/27/12'] = 150;
	week['03/05/12'] = 124;
	week['03/12/12'] = 135;
	week['03/19/12'] = 175;
	week['03/26/12'] = 156;
	var month = new Object();
	month['11/11'] = 600;
	month['12/11'] = 573;
	month['01/12'] = 562;
	month['02/12'] = 632;
	month['03/12'] = 621;
	month['04/12'] = 616;
	drawDetailsChart(day, week, month);
}

function drawDetailsChart(day, week, month) {
	var current = 0;

	var dayData = new google.visualization.DataTable();
	dayData.addColumn('string', 'Day');
	dayData.addColumn('number', 'Usage');
	$.each(day, function(key, value) { 
		dayData.addRow([key, value]);
	});
	
	var weekData = new google.visualization.DataTable();
	weekData.addColumn('string', 'Week');
	weekData.addColumn('number', 'Usage');
	$.each(week, function(key, value) { 
		weekData.addRow([key, value]);
	});
	
	var monthData = new google.visualization.DataTable();
	monthData.addColumn('string', 'Day');
	monthData.addColumn('number', 'Usage');
	$.each(month, function(key, value) { 
		monthData.addRow([key, value]);
	});

	var data = [];
    data[0] = dayData;
    data[1] = weekData;
	data[2] = monthData;
	
	var axisTitle = [];
	axisTitle[0] = 'day';
	axisTitle[1] = 'week';
	axisTitle[2] = 'month';
	
	var options = {
		colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
		chartArea: {width:'80%', height:'60%'},
		'width':Math.min(500, $(document).width()),
		'height':300,
		isStacked: true,
		legend: {position: 'none'},
		vAxis: {title: 'Energy Usage ($/day)'},
		backgroundColor: { fill:'transparent' },
		animation:{
			duration: 1000,
			easing: 'out'
		},
	};

	var chart = new google.visualization.AreaChart(document.getElementById('appliance_details_chart'));
	
	function drawingDetailsChart() {
		options.vAxis.title = 'Energy Usage ($/'+axisTitle[current]+')';
		chart.draw(data[current], options);
    }	
	drawingDetailsChart();
	
	/* Appliance details chart time period selector button. */
	$("#appliance_details_button").children(".details_day_button").click(function() {
			$("#appliance_details_button").children(".details_week_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_month_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_day_button").addClass("ui-btn-active");
			current = 0;
			drawingDetailsChart();
	});
	$("#appliance_details_button").children(".details_week_button").click(function() {
			$("#appliance_details_button").children(".details_day_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_month_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_week_button").addClass("ui-btn-active");
			current = 1;
			drawingDetailsChart();
	});
	$("#appliance_details_button").children(".details_month_button").click(function() {
			$("#appliance_details_button").children(".details_day_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_week_button").removeClass("ui-btn-active");
			$("#appliance_details_button").children(".details_month_button").addClass("ui-btn-active");
			current = 2;
			drawingDetailsChart();
	});
}