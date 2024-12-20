import React from 'react';
import { DollarSign, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { MetricsGrid } from '../components/MetricsGrid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 65000 },
  { month: 'Feb', revenue: 72000 },
  { month: 'Mar', revenue: 85000 },
  { month: 'Apr', revenue: 78000 },
  { month: 'May', revenue: 92000 },
  { month: 'Jun', revenue: 98000 },
];

export function Finance() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$490,000",
      icon: DollarSign,
      trend: { value: 15.2, isPositive: true }
    },
    {
      title: "ARPU",
      value: "$125",
      icon: TrendingUp,
      trend: { value: 8.4, isPositive: true }
    },
    {
      title: "Outstanding",
      value: "$45,678",
      icon: CreditCard,
      trend: { value: 12.3, isPositive: false }
    },
    {
      title: "Profit Margin",
      value: "28.5%",
      icon: PieChart,
      trend: { value: 3.2, isPositive: true }
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Finance Dashboard</h1>
      
      <MetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Outstanding Invoices</h2>
          <div className="space-y-4">
            {[
              { client: "Tech Corp", amount: "$12,500", status: "Overdue", days: 15 },
              { client: "Global Inc", amount: "$8,750", status: "Due", days: 5 },
              { client: "Startup Ltd", amount: "$5,000", status: "Due", days: 3 },
              { client: "Enterprise Co", amount: "$15,000", status: "Overdue", days: 20 }
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{invoice.client}</div>
                  <div className="text-sm text-gray-500">{invoice.amount}</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${
                    invoice.status === 'Overdue' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {invoice.status}
                  </div>
                  <div className="text-sm text-gray-500">{invoice.days} days</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}