import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'John', sales: 4000 },
  { name: 'Sarah', sales: 3500 },
  { name: 'Mike', sales: 3200 },
  { name: 'Lisa', sales: 2800 },
  { name: 'David', sales: 2400 }
];

export function SalesChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}