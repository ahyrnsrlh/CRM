import React from 'react';
import { Target, Mail, Share2, TrendingUp } from 'lucide-react';
import { MetricsGrid } from '../components/MetricsGrid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const campaignData = [
  { name: 'Week 1', leads: 100, engagement: 80 },
  { name: 'Week 2', leads: 120, engagement: 90 },
  { name: 'Week 3', leads: 150, engagement: 85 },
  { name: 'Week 4', leads: 180, engagement: 95 },
];

export function Marketing() {
  const metrics = [
    {
      title: "Total Leads",
      value: "2,543",
      icon: Target,
      trend: { value: 12.5, isPositive: true }
    },
    {
      title: "Email Open Rate",
      value: "45.8%",
      icon: Mail,
      trend: { value: 3.2, isPositive: true }
    },
    {
      title: "Social Engagement",
      value: "12.3K",
      icon: Share2,
      trend: { value: 8.1, isPositive: true }
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: TrendingUp,
      trend: { value: 1.5, isPositive: true }
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Marketing Dashboard</h1>
      
      <MetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#4F46E5" />
                <Line type="monotone" dataKey="engagement" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Lead Sources</h2>
          <div className="space-y-4">
            {[
              { source: "Organic Search", value: "35%", count: "892" },
              { source: "Paid Ads", value: "25%", count: "635" },
              { source: "Social Media", value: "20%", count: "508" },
              { source: "Email", value: "15%", count: "381" },
              { source: "Referral", value: "5%", count: "127" }
            ].map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{source.source}</div>
                  <div className="text-sm text-gray-500">{source.count} leads</div>
                </div>
                <div className="text-sm font-medium">{source.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}