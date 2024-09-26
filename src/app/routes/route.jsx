import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../../pages/layouts/MainLayout'
import { ErrorPage } from '../../pages/Error/ErrorPage'
import { Home } from '../../pages/Home/ui/Home'

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
])
