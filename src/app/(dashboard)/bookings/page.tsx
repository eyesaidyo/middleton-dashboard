'use client';

import { Calendar } from 'lucide-react';

export default function BookingsPage() {
  const bookings: never[] = [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-middleton-green font-figtree">My Bookings</h1>
          <p className="text-gray-500 mt-1">Manage your upcoming and past stays.</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-1 flex">
          <button className="px-4 py-2 text-sm font-medium bg-middleton-green text-white rounded-md shadow-sm">Upcoming</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-middleton-green rounded-md">Past</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-middleton-green rounded-md">Cancelled</button>
        </div>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-4">
          {/* Booking List would go here */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="h-20 w-20 bg-middleton-denim rounded-full flex items-center justify-center mb-6">
            <Calendar className="h-10 w-10 text-middleton-green" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-500 max-w-sm mb-8">
            You haven&apos;t made any bookings yet. Browse our catalog to find your next home away from home.
          </p>
          <button className="bg-middleton-green text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-middleton-green/20">
            Browse Apartments
          </button>
        </div>
      )}
    </div>
  );
}
