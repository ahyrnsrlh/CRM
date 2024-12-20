import React from 'react';
import { Users, DollarSign, Target, TrendingUp } from 'lucide-react';
import { MetricsGrid } from '../components/MetricsGrid';
import { FunnelChart } from '../components/FunnelChart';
import { SalesChart } from '../components/SalesChart';

export function Sales() {
  const metrics = [
    {
      title: "Pipeline Value",
      value: "$125,000",
      icon: DollarSign,
      trend: { value: 15.2, isPositive: true }
    },
    {
      title: "Deals Won",
      value: "45",
      icon: Target,
      trend: { value: 8.1, isPositive: true }
    },
    {
      title: "Win Rate",
      value: "68%",
      icon: TrendingUp,
      trend: { value: 5.3, isPositive: true }
    },
    {
      title: "New Opportunities",
      value: "123",
      icon: Users,
      trend: { value: 12.5, isPositive: true }
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
      
      <MetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Sales Pipeline</h2>
          <FunnelChart />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Top Performers</h2>
          <SalesChart />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Deals</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Deal</th>
                <th className="text-left py-3 px-4">Value</th>
                <th className="text-left py-3 px-4">Stage</th>
                <th className="text-left py-3 px-4">Owner</th>
              </tr>
            </thead>
            <tbody>
              {[
                { deal: "Enterprise Solution", value: "$45,000", stage: "Negotiation", owner: "John Doe" },
                { deal: "Software License", value: "$28,000", stage: "Proposal", owner: "Sarah Smith" },
                { deal: "Consulting Package", value: "$15,000", stage: "Qualified", owner: "Mike Johnson" }
              ].map((deal, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{deal.deal}</td>
                  <td className="py-3 px-4">{deal.value}</td>
                  <td className="py-3 px-4">{deal.stage}</td>
                  <td className="py-3 px-4">{deal.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}