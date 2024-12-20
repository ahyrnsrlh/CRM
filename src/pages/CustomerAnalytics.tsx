import React from 'react';
import { Users, UserMinus, DollarSign, Heart } from 'lucide-react';
import { MetricsGrid } from '../components/MetricsGrid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const lifetimeValueData = [
  { segment: 'Enterprise', value: 15000 },
  { segment: 'Mid-Market', value: 8000 },
  { segment: 'Small Business', value: 3000 },
  { segment: 'Startup', value: 1000 },
];

export function CustomerAnalytics() {
  const metrics = [
    {
      title: "Total Customers",
      value: "1,234",
      icon: Users,
      trend: { value: 8.2, isPositive: true }
    },
    {
      title: "Churn Rate",
      value: "2.5%",
      icon: UserMinus,
      trend: { value: 0.5, isPositive: true }
    },
    {
      title: "Avg Lifetime Value",
      value: "$4,500",
      icon: DollarSign,
      trend: { value: 12.3, isPositive: true }
    },
    {
      title: "NPS Score",
      value: "72",
      icon: Heart,
      trend: { value: 5.7, isPositive: true }
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customer Analytics</h1>
      
      <MetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Lifetime Value by Segment</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={lifetimeValueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="segment" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Feedback Analysis</h2>
          <div className="space-y-6">
            {[
              { category: "Product Quality", score: 4.5, responses: 256 },
              { category: "Ease of Use", score: 4.2, responses: 245 },
              { category: "Customer Support", score: 4.8, responses: 189 },
              { category: "Value for Money", score: 4.3, responses: 234 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-gray-600">{item.score}/5.0 ({item.responses} responses)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}