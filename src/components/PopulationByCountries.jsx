import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { getPopulationByCountries } from "../api/api";

const PopulationByCountries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPopulationByCountries();

      console.log("Chart Data:", res);

      const formattedData = res.map((item) => ({
        country: item.Name,
        population: item.Population,
      }));

      setData(formattedData);
    };

    fetchData();
  }, []);

  const colors = [
    "#4F46E5",
    "#06B6D4",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#F97316",
    "#6366F1",
  ];

  return (
    <div className="dashboard-card p-3">
      <h2 className="text-center mb-4">
        🌍 Population By Countries
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="country"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={80}
          />

          <YAxis
  tickFormatter={(value) =>
    `${(value / 1000000).toFixed(0)}M`
  }
/>

          <Tooltip formatter={(value) => [
      value.toLocaleString(),
      "Population",
    ]}/>

          <Bar dataKey="population">
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationByCountries;