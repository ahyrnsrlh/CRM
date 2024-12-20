import React from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface MetricProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

interface MetricsGridProps {
  metrics: MetricProps[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} {...metric} />
      ))}
    </div>
  );
}