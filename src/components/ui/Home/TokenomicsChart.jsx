import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Tokenomics = () => {
  // ✔ Your same values — nothing changed
  const data = [
    { name: "Symbol", value: 45, subtitle: "$PANDE" },
    { name: "Total Supply", value: 50, subtitle: "1,000,000,000 PANDE" },
    { name: "Liquidity Locked", value: 35, subtitle: "100% for 1 year" },
    { name: "Staking Rewards", value: 15, subtitle: "Up to 15% APY" },
  ];
  const COLORS = ["#66a22a", "#726091", "#5b5ca9", "#726091"];

  // ⭐ Custom label for percent circle + name + subtitle
  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
    subtitle,
  }) => {
    const RADIAN = Math.PI / 180;

    // Percentage circle position
    const labelRadius = (innerRadius + outerRadius) / 2;
    const px = cx + labelRadius * Math.cos(-midAngle * RADIAN);
    const py = cy + labelRadius * Math.sin(-midAngle * RADIAN);

    // Outside text position
    const textRadius = outerRadius + 50;
    const tx = cx + textRadius * Math.cos(-midAngle * RADIAN);
    const ty = cy + textRadius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        {/* ★ Percent Circle */}
        <g>
          <circle cx={px} cy={py} r={28} fill="white" stroke="#dcdcdc" strokeWidth="3" />
          <text
            x={px}
            y={py}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="16"
            fontWeight="700"
          >
            {(percent * 100).toFixed(0)}%
          </text>
        </g>

        {/* ★ Name + Subtitle */}
        <text x={tx} y={ty} textAnchor="middle">
          <tspan  fontWeight="700">
            {name}
          </tspan>
          <tspan
            x={tx}
            dy="1.3em"
            fill="#555"
          >
            {subtitle}
          </tspan>
        </text>
      </>
    );
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#edffe1] pb-10 to-[#e5ffe6]">
        <section className="mycontainer">
          <h2 className="text-3xl md:text-[82px] text-center">Tokenomics</h2>
          <p>1% AUTO-BURN MECHANISM — UP TO 75% TOTAL SUPPLY REDUCTION</p>
          <div className="relative">
            <ResponsiveContainer width="100%" height={700}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={220}
                  label={CustomLabel}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                {/* <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} /> */}
              </PieChart>
            </ResponsiveContainer>

            {/* Panda in center */}
            <div className="absolute top-[16%] right-[27%] pointer-events-none">
              <img
                className="w-[80%]"
                src="/assets/images/chart_panda.svg"
                alt="panda"
              />
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Tokenomics;
