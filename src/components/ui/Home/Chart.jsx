import React, { useLayoutEffect, useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const PieChart = ({ tokenomicsRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [istab, setIsTab] = useState(false);
  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1025);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);

    // const checkTab = () => setIsTab(window.innerWidth <= 1025);
    // checkTab()
  }, []);

  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create("pieDiv", am4charts.PieChart3D);
    chart.data = [
      { category: "Presale on Launchpad", value: 1 },
      { category: "Staking Rewards", value: 24 },
       { category: "Burning Upto", value: 75 },
      // { category: "Liquidity Locked\n[gray]100% for 1 year[/]", value: 25 },
      // { category: "Symbol\n[gray]$Panda[/]", value: 30 }
    ];

    const pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";

    chart.depth = 15;
    chart.angle = 10;

    pieSeries.labels.template.adapter.add("textOutput", function (_, target) {
      let percent = Math.round(target.dataItem.values.value.percent);
      let category = target.dataItem.category;
      return `${category}: ${percent}%`;
    });

    // =============================================
    pieSeries.events.on("validated", () => {
      if (isMobile) {
        // Ticks hide
        pieSeries.ticks.template.disabled = true;

        // Move labels up/down
        pieSeries.labels.each((label, i) => {
          if (i === 0) label.dy = -70; // up
          if (i === 1) label.dy = -70; // up
          if (i === 2) label.dy = 70; // down
          if (i === 3) label.dy = 70; // down
        });
      }
    });

    // ================================================

    pieSeries.colors.list = [
      am4core.color("#72A314"),
      am4core.color("#6F5F93"),
      am4core.color("#a43736"),
      // am4core.color("#6F5F93")
    ];

    // slice style
    pieSeries.slices.template.stroke = am4core.color("#040404");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.tooltipText = "";

    // ticks = line
    pieSeries.ticks.template.strokeWidth = 2;
    pieSeries.ticks.template.length = 0;
    pieSeries.ticks.template.disabled = false;

    // labels
    pieSeries.labels.template.fill = am4core.color("#000");
    pieSeries.labels.template.wrap = true;
    pieSeries.labels.template.fontSize = 20;
    pieSeries.labels.template.maxWidth = 300;
    // pieSeries.labels.template.text = "{category}";

    // pieSeries.events.on("validated", () => {
    //   const cx = chart.pixelWidth / 2;  // chart center X
    //   const cy = chart.pixelHeight / 2; // chart center Y

    //   const tipPositions = [
    //     { xOffset: -1280, yOffset: -60 },    // slice 0 → right -- third
    //     { xOffset: -630, yOffset: -708 },   // slice 1 → left -- second
    //     // { xOffset: -500, yOffset: -645 },   // slice 2 → top -- first
    //     // { xOffset: -1190, yOffset: -605 }     // slice 3 → bottom -- fourth
    //   ];

    //   pieSeries.slices.each((slice, index) => {
    //     if (slice.tipCircle) slice.tipCircle.dispose();

    //     const circle = chart.seriesContainer.createChild(am4core.Circle);
    //     circle.radius = 6;
    //     circle.fill = am4core.color("#ffffff");
    //     circle.stroke = am4core.color("#000000");
    //     circle.strokeWidth = 2;

    //     // position relative to chart center
    //     circle.x = cx + tipPositions[index].xOffset;
    //     circle.y = cy + tipPositions[index].yOffset;
    //     if (isMobile) {
    //       circle.visible = false;
    //     }

    //     slice.tipCircle = circle;
    //   });
    // });

    // Mobile: position 2 labels up, 2 labels down
    if (isMobile) {
      // Labels hide
      pieSeries.labels.template.disabled = true;

      // Ticks hide
      pieSeries.ticks.template.disabled = true;

      // Enable legend
      chart.legend = new am4charts.Legend();

      // Legend me percentage WITHOUT decimal
      chart.legend.valueLabels.template.text =
        "{value.percent.formatNumber('#')}%";
    }

    return () => chart.dispose();
  }, [isMobile]);

  return (
    // <div ref={tokenomicsRef} className="relative w-full bg-[#e5ffd4]">
    //   <h1 className="w-full text-center text-[30px] md:text-[40px] lg:text-[82px]">Tokenomics</h1>
    //   <p className="w-full text-center text-[14px] sm:text-xl pt-5">100,000,000 $PANDX</p>
    //   <img
    //     src="assets/images/PandaTokenGroup.svg"
    //     alt="logo"
    //     className="absolute sm:top-[35%] md:top-[35%] lg:top-[37%] sm:left-[50%] top-[26%] mac-top-38 left-[50%] translate-x-[-50%] sm:w-[180px] w-[100px] z-10 pointer-none"
    //   />
    //   <div id="pieDiv" className="w-full h-[400px] sm:h-[600px] pb-10 "></div>
    // </div> 

    <div ref={tokenomicsRef} className="w-full bg-[#e5ffd4]">
      <h1 className="w-full text-center text-[30px] md:text-[40px] lg:text-[82px]">
        Tokenomics
      </h1>
       <p className="w-full text-center text-[14px] sm:text-xl">
       1% AUTO-BURN MECHANISM — UP TO 75% TOTAL SUPPLY REDUCTION
      </p>
      <p className="w-full text-center text-[14px] sm:text-xl py-5">
        100,000,000 $PANDX
      </p>
      <div className="relative">
        <div id="pieDiv" className="w-full h-[400px] sm:h-[600px] pb-10 "></div>
        <div className="absolute sm:top-[30%] md:top-[20%] lg:top-[25%] sm:left-[50%] top-[12%] left-[50%] translate-x-[-50%] sm:w-[180px] w-[100px] z-10 pointer-none">
          <img src="assets/images/PandaTokenGroup.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
