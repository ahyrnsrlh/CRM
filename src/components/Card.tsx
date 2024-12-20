import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function Card({ title, value, icon: Icon, trend }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <Icon className="w-6 h-6 text-gray-400" />
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        {trend && (
          <div
            className={`flex items-center text-sm ${
              trend.isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
    </div>
  );
}