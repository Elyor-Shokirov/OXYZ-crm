// src/routes/index.tsx
/* eslint-disable react-refresh/only-export-components */
import About from '@/pages/about/about'
import ContactPage from '@/pages/contact/contact'
import ErrorPage from '@/pages/error/error'
import NewsPage from '@/pages/news/news'
import NewsDetail from '@/pages/news/news-detail'
import Service from '@/pages/service-page/service'
import type { RouteObject } from 'react-router'
import Layout from '../components/Layout/layout'
import Home from '../pages/home'

export const routes: RouteObject[] = [
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
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]

export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	SERVICE: '/service',
	NEWS: '/news',
	NEWS_DETAIL: (slug: string) => `/news/${slug}`,
} as const
