import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, Inbox, Settings, Search, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardLayout() {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Payout', href: '/payout', icon: CreditCard },
    { name: 'Inbox', href: '/inbox', icon: Inbox },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">DASMIN</h1>
        </div>
        <nav className="mt-6 px-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2 mt-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm">
          <div className="flex h-full items-center justify-between px-6">
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 w-96">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium">Dedrick Marks</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}