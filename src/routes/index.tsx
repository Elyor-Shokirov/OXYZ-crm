// src/routes/index.tsx
/* eslint-disable react-refresh/only-export-components */
import About from '@/pages/about/about'
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
		],
	},
]

export const ROUTES = {
	HOME: '/',
} as const
