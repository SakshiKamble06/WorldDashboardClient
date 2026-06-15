import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import { getAveLifeExpectancyAllCountries } from "../api/api";

const AverageLifeExpectacnyAllCountries = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAveLifeExpectancyAllCountries();
      setValue(res);
    };
    fetchData();
  }, []);

  const data = [
    { name: "Life Expectancy", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <div className="life-card">
      <h3 className="life-title">
        ❤️ Average Life Expectancy
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
  <Pie
    data={data}
    dataKey="value"
    innerRadius={60}
    outerRadius={90}
    paddingAngle={3}
  >
    <Cell fill="#22c55e" />
    <Cell fill="#e5e7eb" />
  </Pie>

  <Tooltip />

  <text
    x="50%"
    y="50%"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize="20"
    fontWeight="bold"
  >
    {Number(value).toFixed(1)}
  </text>
</PieChart>
      </ResponsiveContainer>

      <div className="life-value">
        {Number(value).toFixed(1)}
      </div>

      <p className="life-text">
        Average Years Worldwide
      </p>
    </div>
  );
};

export default AverageLifeExpectacnyAllCountries;