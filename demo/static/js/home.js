// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart', 'gauge']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {
  drawBarChart();
  drawPieChart();
  drawGoalChart();
}

function drawBarChart() {
  var data = new google.visualization.DataTable();
          data.addColumn('string', 'Month');
          data.addColumn('number', 'This');
          data.addColumn('number', 'Last');
          data.addRows([
            ['Week', 1000, 400],
            ['Month', 1170, 460],
            ['January', 660, 1120]
          ]);

          var options = {
            colors:['#3d9ca8', '#efd8a1', '#bcd693', '#afd7db', '#af7575'],
            chartArea: {width: '65%'},
			legend: {position: 'bottom'}
          };

          var chart = new google.visualization.BarChart(document.getElementById('compare_chart'));
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
                       'width':400,
                       'height':300,
          colors:['3d9ca8', '#af7575', '#efd8a1', '#bcd693', '#afd7db']
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('bar_chart'));
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
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5,
          greenColor: '#af7575',
          yellowColor: '#efd8a1',
          redColor: '#af7575'
        };

        var chart = new google.visualization.Gauge(document.getElementById('goal_chart'));
        chart.draw(data, options);
}
