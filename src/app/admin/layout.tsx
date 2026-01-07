'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FileText, Video, LayoutDashboard, LogOut, Settings } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/me');
            const data = await response.json();

            if (data.authenticated) {
                setAuthenticated(true);
                // If on login page and authenticated, redirect to dashboard
                if (pathname === '/admin') {
                    router.push('/admin/dashboard');
                }
            } else {
                // If not authenticated and not on login page, redirect to login
                if (pathname !== '/admin') {
                    router.push('/admin');
                }
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            if (pathname !== '/admin') {
                router.push('/admin');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/admin');
            router.refresh();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    // Show login page without sidebar
    if (!authenticated || pathname === '/admin') {
        return <>{children}</>;
    }

    // Show admin layout with sidebar
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-900">Taldo Admin</h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/admin/dashboard'
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <LayoutDashboard size={20} />
                        <span className="font-medium">Dashboard</span>
                    </Link>

                    <Link
                        href="/admin/blogs"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/blogs')
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <FileText size={20} />
                        <span className="font-medium">Blogs</span>
                    </Link>

                    <Link
                        href="/admin/webinars"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/webinars')
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <Video size={20} />
                        <span className="font-medium">Webinars</span>
                    </Link>

                    <Link
                        href="/admin/settings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/settings')
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <Settings size={20} />
                        <span className="font-medium">Settings</span>
                    </Link>
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
