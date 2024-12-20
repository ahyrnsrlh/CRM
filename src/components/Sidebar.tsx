import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Target, Headphones, DollarSign, Users } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: TrendingUp, label: 'Sales', path: '/sales' },
  { icon: Target, label: 'Marketing', path: '/marketing' },
  { icon: Headphones, label: 'Customer Service', path: '/customer-service' },
  { icon: DollarSign, label: 'Finance', path: '/finance' },
  { icon: Users, label: 'Customer Analytics', path: '/analytics' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="text-white text-2xl font-bold mb-8 px-4">CRM Dashboard</div>
      <nav>
        {menuItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(
                'flex items-center text-gray-300 px-4 py-3 rounded-lg mb-2 transition-colors',
                'hover:bg-gray-800 hover:text-white',
                isActive && 'bg-gray-800 text-white'
              )
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}