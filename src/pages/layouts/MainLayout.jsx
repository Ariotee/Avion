import { Outlet } from 'react-router-dom'
import { Header } from '../../widgets/header'
import { Footer } from '../../widgets/footer/ui'

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
