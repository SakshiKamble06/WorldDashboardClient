import React, { useEffect, useState } from "react";
import { getTopLanguages } from "../api/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const TopTenLanguages = () => {

    const [languages,setLanguages] = useState([]);

    async function fetchData(){
        const res = await getTopLanguages();
        setLanguages(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
  <div className="dashboard-card">
    <h2>🌐 Top 10 Languages</h2>

    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={languages}>
        <XAxis dataKey="Language" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="country_count">
          {languages.map((entry, index) => {
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
              <Cell
                key={index}
                fill={colors[index % colors.length]}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
};

export default TopTenLanguages;