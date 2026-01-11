import { Outlet } from 'react-router'
import Footer from '../footer/footer'

function Layout() {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
