import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const CustomPieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create(chartRef.current, am4charts.PieChart3D);
    chart.innerRadius = am4core.percent(30); // creates inner ring
    chart.depth = 20;
    chart.angle = -45;  
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
      { category: "Symbol $PANDE", value: 50 },
      { category: "Total Supply", value: 35 },
      { category: "Staking Rewards", value: 15 },
      { category: "Liquidity Locked", value: 45 },
      
    ];

    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";

    // Custom colors
    series.colors.list = [
      am4core.color("#5b5bac"), // purple
      am4core.color("#6f5f93"), // lighter purple
      am4core.color("#72A315"), // green
      am4core.color("#6f5f93"), // blue
    ];

    // Optional: hatch fill for inner ring
    series.slices.template.fillOpacity = 1;
    series.slices.template.stroke = am4core.color("#fff");
    series.slices.template.strokeWidth = 2;


if (window.innerWidth < 769) {
  series.labels.template.disabled = true;
  series.ticks.template.disabled = true;
}

// Also respond to future resizes
const handleResize = () => {
  const isMobile = window.innerWidth < 769;
  series.labels.template.disabled = isMobile;
  series.ticks.template.disabled = isMobile;
};

window.addEventListener("resize", handleResize);

      chart.responsive.enabled = true;
  chart.responsive.rules.push({
    relevant: (target) => window.innerWidth < 769,
    state: (target, state) => {
      if (target instanceof am4charts.PieSeries) {
        target.labels.template.disabled = true;
        target.ticks.template.disabled = true;
      }
      if (target instanceof am4charts.Legend) {
        target.labels.template.disabled = true;
        target.valueLabels.template.disabled = true;
        target.markers.template.disabled = true;
      }
      return state;
    },
  });

    return () => {
  window.removeEventListener("resize", handleResize);
  chart.dispose();
};
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "600px" }} />;
};

export default CustomPieChart;