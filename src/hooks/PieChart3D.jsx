import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const CustomPieChart = () => {
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = [
      { Labels: "Presale on Launchpad\n1%", value: 25 },
      { Labels: "Staking Rewards\n Up to 15% APY", value: 25 },
      { Labels: "Liquidity Locked\n100% for 1 year", value: 25 },
      { Labels: "Staking Rewards\n99%", value: 25 },
    ];

    chart.innerRadius = am4core.percent(30);

    chart.colors.list = [
      am4core.color("#5b5bac"),
      am4core.color("#6f5f93"),
      am4core.color("#72A315"),
      am4core.color("#6f5f93"),
    ];

  
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "Labels";

    pieSeries.radius = am4core.percent(90);

    // Ensure inside % label stays
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.labels.template.radius = am4core.percent(-30);
    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;

    


    pieSeries.slices.template.adapter.add("fill", function (fill, target) {
      // target.dataItem.index gives slice index; use chart.colors.getIndex
      if (target && target.dataItem && typeof target.dataItem.index === "number") {
        return chart.colors.getIndex(target.dataItem.index);
      }
      return fill;
    });
    // optional: ensure stroke is none
    // pieSeries.slices.template.strokeOpacity = 20;
    

    //
    // OUTSIDE LABEL SERIES (transparent slices + labels + ticks)
    //
    let labelSeries = chart.series.push(new am4charts.PieSeries());
    labelSeries.dataFields.value = "value";
    labelSeries.dataFields.category = "Labels";

    // Make label-series invisible (so it doesn't override colors)
    labelSeries.slices.template.fillOpacity = 0;
    labelSeries.slices.template.strokeOpacity = 0;

    try {

      delete labelSeries.slices.template.propertyFields.fill;
      delete labelSeries.slices.template.propertyFields.stroke;
    } catch (e) {
      // ignore if not present
    }

    // radius for labels (bring closer to slice to shorten the straight part)
    labelSeries.radius = am4core.percent(90);
    labelSeries.labels.template.radius = am4core.percent(35); // adjust 25-40 to taste

    

    // label text (category only)
    labelSeries.labels.template.text = "{category}";
    labelSeries.labels.template.fontSize = 20;
    labelSeries.labels.template.fill = am4core.color("#000");
    labelSeries.labels.template.wrap = false;
    labelSeries.labels.template.maxWidth = 120;

    

    // TICKS: short + slightly angled
    labelSeries.ticks.template.length = 50; // straight part length
    labelSeries.ticks.template.strokeWidth = 1;
    labelSeries.ticks.template.stroke = am4core.color("#000000");

    // labelSeries.ticks.template.locationX = 1; // move attachment to slice outer edge
    // labelSeries.ticks.template.locationY = 1; // slight vertical offset for slant

    // Labels inside slice with white circular border


// Add white circle background
pieSeries.labels.template.background = new am4core.Circle();
pieSeries.labels.template.background.fillOpacity = 0; // transparent inside
pieSeries.labels.template.background.stroke = am4core.color("#ffffff"); // white border
pieSeries.labels.template.background.strokeWidth = 2; // border thickness
pieSeries.labels.template.background.radius = 35; // pixel value, not percent
// pieSeries.labels.template.background.relativeCenter = { x: 10, y: 10 }; // center on label
pieSeries.labels.template.background.dx = 26; // left
pieSeries.labels.template.background.dy = 10;  // down




    

    // Disable legend
    chart.legend = null;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" className="py-10 w-full h-[700px]"data-aos="slide-up"></div>
};

export default CustomPieChart;
