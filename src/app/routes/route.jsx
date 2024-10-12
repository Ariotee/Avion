import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../../pages/Home/ui/Home'
import { AuthPage } from '../../pages/Auth/AuthPage'
import { ErrorPage } from '../../pages/Error/ErrorPage'
import { AuthLayout } from '../../pages/layouts/AuthLayout'
import { MainLayout } from '../../pages/layouts/MainLayout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/collection',
			},
		],
	},

	{
		path: '/auth',
		element: <AuthLayout />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: '/auth',
				element: <AuthPage />,
			},
		],
	},
])
