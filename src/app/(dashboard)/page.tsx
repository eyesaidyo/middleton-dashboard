'use client';

import { useAuth } from '@/context/AuthContext';
import { CreditCard, Home, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function DashboardHome() {
  const { user } = useAuth();

  const stats = [
    { name: 'Active Bookings', value: '0', icon: Clock, color: 'bg-blue-500' },
    { name: 'Total Spent', value: '\u20A60.00', icon: CreditCard, color: 'bg-green-500' },
    { name: 'Saved Apartments', value: '3', icon: Home, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-middleton-green font-figtree">
          Welcome back, {user?.email?.split('@')[0]}!
        </h1>
        <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your housing journey.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
            <div className={`${stat.color} p-4 rounded-lg bg-opacity-10`}>
              <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-middleton-green mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/catalog"
              className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-middleton-neon hover:bg-middleton-neon/5 transition-colors group"
            >
              <div className="h-10 w-10 rounded-full bg-middleton-green/10 flex items-center justify-center group-hover:bg-middleton-green group-hover:text-white transition-colors text-middleton-green mb-2">
                <SearchIcon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-middleton-green">Find a Home</span>
            </Link>
            <Link
              href="/settings"
              className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-middleton-neon hover:bg-middleton-neon/5 transition-colors group"
            >
               <div className="h-10 w-10 rounded-full bg-middleton-green/10 flex items-center justify-center group-hover:bg-middleton-green group-hover:text-white transition-colors text-middleton-green mb-2">
                <UserIcon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-middleton-green">Update Profile</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-middleton-green mb-4">Recent Activity</h2>
          <div className="flex flex-col items-center justify-center h-48 text-center text-gray-500">
            <TrendingUp className="h-12 w-12 text-gray-300 mb-2" />
            <p>No recent activity yet.</p>
            <Link href="/catalog" className="text-middleton-green hover:underline text-sm mt-1">
              Start browsing apartments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
