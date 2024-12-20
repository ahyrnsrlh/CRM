import React from 'react';
import { Users, DollarSign, Target, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

export function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card
          title="Total Leads"
          value="2,543"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
        <Card
          title="Active Customers"
          value="1,235"
          icon={CheckCircle}
          trend={{ value: 8.2, isPositive: true }}
        />
        <Card
          title="Conversion Rate"
          value="24.8%"
          icon={Target}
          trend={{ value: 2.1, isPositive: true }}
        />
        <Card
          title="Revenue"
          value="$45,678"
          icon={DollarSign}
          trend={{ value: 15.3, isPositive: true }}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
          <div className="space-y-4">
            {[
              'Follow up with potential clients',
              'Prepare quarterly report',
              'Client meeting at 2 PM',
              'Review marketing campaign results'
            ].map((task, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="mr-3" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Demographics</h2>
          <div className="space-y-4">
            {[
              { label: '18-24', value: '15%' },
              { label: '25-34', value: '35%' },
              { label: '35-44', value: '28%' },
              { label: '45+', value: '22%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{item.label}</span>
                <div className="w-2/3">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}