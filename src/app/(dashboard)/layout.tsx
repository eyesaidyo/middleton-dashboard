'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
  LayoutDashboard,
  CalendarDays,
  Settings,
  Search,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const navigation = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Catalog', href: '/catalog', icon: Search },
    { name: 'Bookings', href: '/bookings', icon: CalendarDays },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  if (loading || !mounted) {
     return <div className="min-h-screen flex items-center justify-center bg-middleton-denim">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-middleton-green"></div>
     </div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-middleton-green text-white transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-middleton-neon/20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/middleton_logo.png"
                alt="Middleton"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-middleton-neon font-figtree">Middleton</span>
            </Link>
            <button
              className="ml-auto lg:hidden text-middleton-neon"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                    ${active
                      ? 'bg-middleton-neon text-middleton-green'
                      : 'text-gray-300 hover:bg-middleton-green/50 hover:text-white'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-middleton-neon/20">
            <div className="flex items-center mb-4 px-2">
              <div className="h-8 w-8 rounded-full bg-middleton-neon flex items-center justify-center text-middleton-green font-bold">
                {user.email?.[0].toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white truncate max-w-[140px]">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm font-medium text-red-300 hover:bg-middleton-green/50 hover:text-red-200 rounded-md transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm h-16 flex items-center px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-middleton-green p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 text-lg font-semibold text-middleton-green">Dashboard</span>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
