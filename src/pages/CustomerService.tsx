import React from 'react';
import { MessageSquare, Clock, ThumbsUp, AlertCircle } from 'lucide-react';
import { MetricsGrid } from '../components/MetricsGrid';

export function CustomerService() {
  const metrics = [
    {
      title: "Open Tickets",
      value: "156",
      icon: MessageSquare,
      trend: { value: 12.5, isPositive: false }
    },
    {
      title: "Avg Response Time",
      value: "2.5h",
      icon: Clock,
      trend: { value: 8.3, isPositive: true }
    },
    {
      title: "CSAT Score",
      value: "4.8/5",
      icon: ThumbsUp,
      trend: { value: 4.2, isPositive: true }
    },
    {
      title: "Urgent Issues",
      value: "23",
      icon: AlertCircle,
      trend: { value: 15.7, isPositive: false }
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customer Service Dashboard</h1>
      
      <MetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Tickets</h2>
          <div className="space-y-4">
            {[
              { id: "TK-001", subject: "Login Issue", priority: "High", status: "Open" },
              { id: "TK-002", subject: "Payment Failed", priority: "Medium", status: "In Progress" },
              { id: "TK-003", subject: "Feature Request", priority: "Low", status: "Open" },
              { id: "TK-004", subject: "Account Access", priority: "High", status: "In Progress" }
            ].map((ticket, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{ticket.subject}</div>
                  <div className="text-sm text-gray-500">#{ticket.id}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    ticket.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Satisfaction</h2>
          <div className="space-y-6">
            {[
              { category: "Response Time", score: 4.5 },
              { category: "Resolution Quality", score: 4.8 },
              { category: "Agent Helpfulness", score: 4.9 },
              { category: "Overall Experience", score: 4.7 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-gray-600">{item.score}/5.0</span>
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