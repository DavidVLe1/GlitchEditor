google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Bug Report', 'Bug Count'],
        ['Bugs Fixed', 13],
        ['Work in Progress', 8],
        ['Unaltered', 9],
    ]);

    var severityData = google.visualization.arrayToDataTable([
        ['Severity Level', 'Bug Count'],
        ['Urgent', 2],
        ['Severe', 6],
        ['Moderate', 14],
        ['Low', 8],
    ]);

    var options = {'title':'Bug Report', 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
function drawChart2() {


    var severityData = google.visualization.arrayToDataTable([
        ['Severity Level', 'Bug Count'],
        ['Urgent', 2],
        ['Severe', 6],
        ['Moderate', 14],
        ['Low', 8],
    ]);

    var options = {'title':'Bug Report', 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(severityData, options);
}
