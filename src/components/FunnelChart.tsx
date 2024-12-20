import React from 'react';

interface FunnelStageProps {
  label: string;
  value: number;
  percentage: number;
  color: string;
}

function FunnelStage({ label, value, percentage, color }: FunnelStageProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export function FunnelChart() {
  const stages = [
    { label: 'Leads', value: 1200, percentage: 100, color: '#4F46E5' },
    { label: 'Qualified', value: 800, percentage: 66, color: '#6366F1' },
    { label: 'Proposal', value: 400, percentage: 33, color: '#818CF8' },
    { label: 'Negotiation', value: 200, percentage: 16, color: '#A5B4FC' },
    { label: 'Closed', value: 100, percentage: 8, color: '#C7D2FE' },
  ];

  return (
    <div className="space-y-2">
      {stages.map((stage, index) => (
        <FunnelStage key={index} {...stage} />
      ))}
    </div>
  );
}