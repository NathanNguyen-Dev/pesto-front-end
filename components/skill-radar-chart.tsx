'use client';

import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip
} from 'recharts';

interface SkillData {
  [key: string]: number;
}

interface SkillRadarChartProps {
  skills: SkillData;
  maxLevel?: number; // Optional max level for scaling (e.g., 5)
}

const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ skills, maxLevel = 5 }) => {
  // Transform the data into the format Recharts expects for RadarChart
  // [{ subject: 'Skill Name', A: score, fullMark: maxLevel }, ...]
  const chartData = Object.entries(skills).map(([subject, score]) => ({
    subject: subject.replace('/', ' / '), // Add space for better axis label wrapping
    score: score,
    fullMark: maxLevel,
  }));

  // Custom Tick for PolarAngleAxis to handle potentially long labels
  const renderPolarAngleAxisTick = ({ payload, x, y, cx, cy, ...rest }: any) => {
    return (
      <text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10} // Adjust vertical position slightly
        x={x + (x - cx) / 100} // Adjust horizontal position slightly
        className="text-[10px] md:text-xs fill-current text-gray-600"
      >
        {payload.value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={250} minWidth={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
        <PolarGrid stroke="#e2e8f0" /> {/* Grid line color */}
        <PolarAngleAxis
          dataKey="subject"
          tick={renderPolarAngleAxisTick}
          stroke="#4a5568" // Axis label color
        />
        <PolarRadiusAxis
            angle={90} // Start angle for labels
            domain={[0, maxLevel]} // Scale from 0 to maxLevel
            tick={false} // Hide the radius axis numerical labels
            axisLine={false} // Hide the radius axis line itself
         />
        <Radar
          name="Profile Skills"
          dataKey="score"
          stroke="#f97316" // Orange stroke for the radar shape
          fill="#fb923c" // Lighter orange fill
          fillOpacity={0.7}
        />
         <Tooltip
            contentStyle={{ backgroundColor: 'rgba(40,40,40,0.9)', border: 'none', borderRadius: '4px' }}
            labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
            itemStyle={{ color: '#f1f5f9' }}
         />
        {/* Optional: Add Legend if needed */}
        {/* <Legend /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart; 