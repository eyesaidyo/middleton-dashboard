'use client';

import { useAuth } from '@/context/AuthContext';
import { User, Mail, Phone, Shield, Bell } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-middleton-green font-figtree">Account Settings</h1>
        <p className="text-gray-500 mt-1">Manage your profile and preferences.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-middleton-green flex items-center">
            <User className="mr-2 h-5 w-5" />
            Personal Information
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-middleton-green focus:border-middleton-green"
                placeholder="Enter your name"
                defaultValue={user?.displayName || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 pl-10"
                  defaultValue={user?.email || ''}
                  disabled
                />
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-middleton-green focus:border-middleton-green pl-10"
                  placeholder="+234..."
                />
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-middleton-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-middleton-green flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Security
            </h2>
          </div>
          <div className="p-6 space-y-4">
             <div className="flex items-center justify-between py-2">
               <div>
                 <p className="font-medium text-gray-900">Password</p>
                 <p className="text-sm text-gray-500">Last changed 3 months ago</p>
               </div>
               <button className="text-middleton-green text-sm font-medium hover:underline">Update</button>
             </div>
             <div className="flex items-center justify-between py-2 border-t border-gray-100 pt-4">
               <div>
                 <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                 <p className="text-sm text-gray-500">Add an extra layer of security</p>
               </div>
               <button className="text-middleton-green text-sm font-medium hover:underline">Enable</button>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
             <h2 className="text-lg font-semibold text-middleton-green flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-middleton-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-middleton-green"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">SMS Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-middleton-neon/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-middleton-green"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
