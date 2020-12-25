var chart = am4core.create("chart1", am4charts.PieChart);

  // Add data
  chart.data = [{
    "category": "رفت و آمد",
    "column": "4"
  },
  {
    "category": "خواب و استراحت",
    "column": "8"
  },
  {
    "category": "درس خواندن در مدرسه",
    "column": "6"
  },
  {
    "category": "تکلیف، تلویزیون و بازی",
    "column": "6"
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "column";
  pieSeries.dataFields.category = "category";
  pieSeries.labels.template.maxWidth = screen.width / 13;
  pieSeries.labels.template.wrap = true;
  chart.rtl = true;

  pieSeries.ticks.template.disabled = true;
  pieSeries.alignLabels = false;
  pieSeries.labels.template.text = "{category}";
  pieSeries.slices.template.tooltipText = "{category} : {value} ساعت";
  pieSeries.labels.template.radius = am4core.percent(-40);
  pieSeries.labels.template.fill = am4core.color("white");
  pieSeries.labels.template.fontSize = '1.5vw';