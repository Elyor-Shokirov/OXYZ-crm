import { useEffect, useState } from 'react'
import NavbarSectionTitle from '../navbar-section-title/navbar.section.title'
import Navbar from '../navbar/navbar'

export interface TitleProps {
	title: string
}
function PageNavbar({ title }: TitleProps) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	return (
		<>
			<div className='container max-w-7xl p-2.5 mx-auto h-112.5'>
				<div className='relative h-full rounded-3xl overflow-hidden'>
					<img
						src='/img/page_hero_img.jpg'
						alt='Hero-img'
						className='absolute inset-0 w-full h-full object-cover '
						style={{
							objectPosition: isMobile ? 'calc(100% + 60px) center' : 'center',
						}}
					/>

					<div className='absolute inset-0 bg-brandcolor/80'></div>

					<div className='absolute top-0 left-0 right-0 z-20'>
						<Navbar transparent={true} />
					</div>
					<div className='relative z-10 lg:px-12 h-full flex items-center'>
						<div className='w-full '>
							<NavbarSectionTitle title={title} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PageNavbar
