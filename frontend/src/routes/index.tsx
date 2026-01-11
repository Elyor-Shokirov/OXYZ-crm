// src/routes/index.tsx
/* eslint-disable react-refresh/only-export-components */
import About from '@/pages/about/about'
// import AdminDashboard from '@/pages/admin/dashboard'
// import AdminLogin from '@/pages/admin/login'
import ContactPage from '@/pages/contact/contact'
import ErrorPage from '@/pages/error/error'
import NewsPage from '@/pages/news/news'
import NewsDetail from '@/pages/news/news-detail'
import Service from '@/pages/service-page/service'
import type { RouteObject } from 'react-router'
// import AdminLayout from '../components/Layout/admin-layout'
import AdminPage from '@/pages/admin/admin.page'
import LoginPage from '@/pages/login/login.page'
import Layout from '../components/Layout/layout'
import Home from '../pages/home'

export const routes: RouteObject[] = [
	// Public Routes (Main Website)
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/service',
				element: <Service />,
			},
			{
				path: '/news',
				element: <NewsPage />,
			},
			{
				path: '/news/:slug',
				element: <NewsDetail />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
		],
	},

	// Admin Login (No Layout)
	{
		path: '/admin/login',
		element: <LoginPage />,
	},

	// Admin Panel Routes (With Admin Layout)
	{
		path: '/admin',
		element: <AdminPage />,
		children: [
			{
				path: 'dashboard',
				// element: <AdminDashboard />,
			},
			{
				path: 'users',
				element: (
					<div className='text-2xl font-bold'>Users Page - Coming Soon</div>
				),
			},
			{
				path: 'news',
				element: (
					<div className='text-2xl font-bold'>
						Admin News Page - Coming Soon
					</div>
				),
			},
			{
				path: 'services',
				element: (
					<div className='text-2xl font-bold'>
						Services Management - Coming Soon
					</div>
				),
			},
			{
				path: 'contacts',
				element: (
					<div className='text-2xl font-bold'>
						Contacts Management - Coming Soon
					</div>
				),
			},
		],
	},

	// 404 Error Page (catch all)
	{
		path: '*',
		element: <ErrorPage />,
	},
]

// Route Constants for easy navigation
export const ROUTES = {
	// Public Routes
	HOME: '/',
	ABOUT: '/about',
	SERVICE: '/service',
	NEWS: '/news',
	NEWS_DETAIL: (slug: string) => `/news/${slug}`,
	CONTACT: '/contact',

	// Admin Routes
	ADMIN_LOGIN: '/admin/login',
	ADMIN_DASHBOARD: '/admin/dashboard',
	ADMIN_USERS: '/admin/users',
	ADMIN_NEWS: '/admin/news',
	ADMIN_SERVICES: '/admin/services',
	ADMIN_CONTACTS: '/admin/contacts',
} as const
