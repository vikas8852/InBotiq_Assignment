'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiMe } from '@/lib/api';

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('auth_token') : null;
    if (!token) {
      router.push('/login');
      return;
    }

    (async () => {
      const res = await apiMe(token);
      if (!res.ok || !res.data) {
        setError(res.error || 'Failed to load user');
        setLoading(false);
        if (res.status === 401) {
          try { window.localStorage.removeItem('auth_token'); } catch {}
          router.push('/login');
        }
        return;
      }
      setUser(res.data);
      setLoading(false);
    })();
  }, [router]);

  const handleLogout = () => {
    try { window.localStorage.removeItem('auth_token'); } catch {}
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-gray-700 dark:text-gray-200">Loading your dashboard…</div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unable to load dashboard</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{error || 'Something went wrong.'}</p>
          <button
            onClick={() => router.push('/login')}
            className="w-full bg-[rgb(255,87,51)] text-white font-semibold py-2 rounded-md"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const isAdmin = user.role?.toUpperCase() === 'ADMIN';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-md border-b-4 border-[rgb(101,174,219)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[rgb(235,49,201)] to-[rgb(126,4,79)] bg-clip-text text-transparent">
              Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[rgb(235,49,201)] text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8 border-l-4 border-[rgb(101,174,219)] flex flex-col items-center justify-center text-center">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
    Welcome back, {user.name}!
  </h2>
  <p className="text-gray-600 dark:text-gray-400">
    Here is your account information
  </p>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[rgb(255,87,51)] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-[rgb(255,87,51)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">User ID</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.id}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[rgb(34,197,94)] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-[rgb(34,197,94)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Username</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[rgb(236,72,153)] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-[rgb(236,72,153)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">{user.email}</p>
          </div>

          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-shadow border-t-4  ${
            isAdmin ? 'border-[rgb(251,146,60)]' : 'border-gray-400'
          }`} >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAdmin 
                  ? 'bg-orange-100 dark:bg-orange-900/30' 
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                <svg 
                  className={`w-6 h-6 ${
                    isAdmin 
                      ? 'text-[rgb(251,146,60)]' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Account Type</h3>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {isAdmin ? 'Admin' : 'User'}
              </p>
              {isAdmin && (
                <span className="px-2 py-1 text-xs font-semibold bg-[rgb(251,146,60)] text-white rounded-full">
                  ★
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}