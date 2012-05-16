function drawTimeChart() {
	$("#time_slider").slider({
		range: true,
		values: [17, 67]
	});
	
	$("#time_slider2").slider({
		range: true,
		values: [17, 67]
	});

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Total household energy usage');
	data.addRows([
		['2011/12', 600],
		['2012/01', 700],
		['2012/02', 565],
		['2012/03', 720],
		['2012/04', 600],
		['2012/05', 750],
		['2012/06', 620],
		['2012/07', 665],
		['2012/08', 590],
		['2012/09', 600],
		['2012/20', 650],
		['2012/12', 720],
		['2013/01', 600],
		['2013/02', 595]
	]);
	
	var slider = new google.visualization.ControlWrapper({
		 'controlType': 'NumberRangeFilter',
		 'containerId': 'control1',
		 'options': {
			 'filterColumnLabel': 'Lighting',
			 'minValue': 0,
			 'maxValue': 2000
		 }
	 });

	var options = {
		colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
		chartArea: {width:'80%', height:'60%'},
		'width':Math.min(500, $(document).width()),
		'height':300,
		isStacked: true,
		legend: {position: 'bottom'},
		vAxis: {title: 'Energy Usage ($/month)'},
		backgroundColor: { fill:'transparent' }
	};

	var chart = new google.visualization.AreaChart(document.getElementById('trend_chart'));
	chart.draw(data, options);
}

function drawTreeChart() {
	// Create and populate the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Region');
	data.addColumn('string', 'Parent');
	data.addColumn('number', 'Market trade volume (size)');
	data.addColumn('number', 'Market increase/decrease (color)');
	data.addRows([
		["Global",null,0,0],
		["Television ($15)","Global",15,0],
		["Lighting ($25)","Global",25,0],
		["A/C ($20)","Global",20,0],
		["Laundry ($5)","Global",5,0],
		["Computer ($10)","Global",10,0],
		["Fridge ($3)","Global",3,0],
		["Other ($2)","Global",2,0],
	]);
	
	// Create and draw the visualization.
	console.log(document.getElementById('trend_chart'));
	var tree = new google.visualization.TreeMap(document.getElementById('trend_chart'));
	tree.draw(data, {
		colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
		'width':Math.min(500, $(document).width()-100),
		'height':300,
		minColor: '#af7575',
		midColor: '#3d9ca8',
		maxColor: '#3d9ca8',
		headerHeight: 15,
		headerColor: '#ffffff',
		fontColor: 'black',
		showScale: false
	});
}

function drawPeerChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'User');
	data.addColumn('number', 'Energy Usage ($ spent in the last 30 days)');
	data.addColumn('number', 'Energy Usage ($/month)');
	data.addRows([
	  ['BENEKER, Alan', 42,0],
	  ['CALHOUN, Jimmy', 35,0],
	  ['LONDOT, Todd', 52,0],
	  ['You', 0,34],
	  ['National Average', 0,44],
	  ['SMITH, Dwight', 25,0],
	  ['PAINTER, Seth', 36,0],
	  ['ELLIOTT, Jared', 51,0],
	  ['DECKER, Kyle', 46,0],
	  ['GODSEY, Brandon', 41,0]
	]);

	var options = {
		'width':Math.min(500, $(document).width()),
		'height':500,
		colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
		chartArea: {width: '50%'},
		legend: {position: 'bottom'},
		isStacked: true,
		series: {1:{color: '#efd8a1', visibleInLegend: false}},
		backgroundColor: { fill:'transparent' }
	};

	data.sort([{column: 1, desc: false}]);
	var chart = new google.visualization.BarChart(document.getElementById('trend_chart'));
	chart.draw(data, options);
}