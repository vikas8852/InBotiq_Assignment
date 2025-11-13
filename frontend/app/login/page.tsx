'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiLogin } from '@/lib/api';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    setSubmitting(true);
    const res = await apiLogin({ email: formData.email, password: formData.password });
    setSubmitting(false);

    if (!res.ok || !res.data?.token) {
      setError(res.error || 'Login failed');
      return;
    }

    try {
      window.localStorage.setItem('auth_token', res.data.token);
    } catch {}

    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border-t-4 border-[rgb(235,49,201)]">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(230,47,147)] to-[rgb(236,72,153)] bg-clip-text text-transparent mb-6 text-center">
            Log In
          </h2>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(255,87,51)] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="you@example.com"
                disabled={submitting}
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(255,87,51)] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                disabled={submitting}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(235,49,201)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
              disabled={submitting}
            >
              {submitting ? 'Signing in...' : 'Log In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{' '}
              <Link 
                href="/signup" 
                className="text-[rgb(235,49,201)] hover:text-[rgb(236,72,153)] font-semibold transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link 
              href="/" 
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
