function drawBarChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Month');
	data.addColumn('number', 'Current');
	data.addColumn('number', 'Previous');
	data.addRows([
		['Week', 1000, 400],
		['Month', 1170, 460],
		['January', 660, 1120]
	]);

	var options = {
		'width':Math.min(500, $(document).width()-100),
		'height':300,
		colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
		chartArea: {width: '70%'},
		legend: {position: 'bottom'},
		backgroundColor: { fill:'transparent' }
	};

	var chart = new google.visualization.BarChart(document.getElementById('status_chart'));
	chart.draw(data, options);
}

function drawPieChart() {
	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Slices');
	data.addRows([
		['A/C', 3],
		['Lighting', 1],
		['Television', 1],
		['Dishwasher', 1],
		['Computers', 2]
	]);

	// Set chart options
	var options = {
		'width':Math.min(500, $(document).width()-100),
		'height':300,
		colors:['3d9ca8', '#af7575', '#efd8a1', '#bcd693', '#afd7db'],
		chartArea: {width:"100%",height:"80%"},
		backgroundColor: { fill:'transparent' },
		legend: {position: 'bottom'},
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('status_chart'));
	chart.draw(data, options);
}		

function drawGoalChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Label');
	data.addColumn('number', 'Value');
	data.addRows([
		['Week', 90],
		['Month',95],
	]);

	var options = {
		'title':'Gaols',
		'width':Math.min(500, $(document).width()-100),
		'height':300,
		redFrom: 90, redTo: 100,
		yellowFrom:75, yellowTo: 90,
		minorTicks: 5,
		greenColor: '#af7575',
		yellowColor: '#efd8a1',
		redColor: '#af7575',
		backgroundColor: { fill:'transparent' }
	};
	
	var chart = new google.visualization.Gauge(document.getElementById('status_chart'));
	chart.draw(data, options);
}	

function tempGetPieChart() {
	var device = new Array("A/C","Television","Lighting","Dishwasher","Computers");
	var data = new Array("3","1","1","1","2");
	return getPieChart(device,data);
}

function getPieChart(device, data) {
	var title = 'chtt=Top+5+energy-consuming+appliances';
	var type = '&cht=p';
	var background = '&chf=bg,s,FFFFFF';
	var color = '&chco=3d9ca8|af7575|efd8a1|bcd693|afd7db';
	var size = '&chs=600x300';
	var label = '&chl='+device[0]+':'+data[0]+'|'+device[1]+':'+data[1]+'|'+device[2]+':'+data[2]+'|'+device[3]+':'+data[3]+'|'+device[4]+':'+data[4]+'&chxs=0,FFFFFF,11.5';
	var value = '&chd=t:'+data[0]+','+data[1]+','+data[2]+','+data[3]+','+data[4];
	var legend = '&chdl='+device[0]+'|'+device[1]+'|'+device[2]+'|'+device[3]+'|'+device[4]+'&chdls=0,FFFFFF,11.5';
	var url = 'https://chart.googleapis.com/chart?'+title+type+background+color+size+label+value+legend;
	return url;
}

function getProcessChart() {
	var title = 'chtt=Usage+Goal+Tracking';
	var type = '&cht=lc';
	var background = '&chf=c,lg,0,3d9ca8,0.2,afd7db,0.4,bcd693,0.6,efd8a1,0.8,af7575,1';
	var color = '&chco=00000000';
	var size = '&chs=500x120';
	var axis = '';
	var axisLabelStyle = '&chxs=0,,9,0,t,000000|1,,9,0,t,000000';
	var marker = '&chm=V,FFFFFF,1,0.2,2|V,FFFFFF,1,0.4,2|V,FFFFFF,1,0.6,2|V,FFFFFF,1,0.8,2|@fYour+Usage:15%,777777,1,.15:.6,18,1&chma=0,0,50';
	var margin = '&chma=0,0,50';
	var rest = '&chd=t:100|0,100&chxt=x,x';
	var url = 'https://chart.googleapis.com/chart?'+title+type+background+color+size+axis+axisLabelStyle+marker+margin+rest;
	return url;
}