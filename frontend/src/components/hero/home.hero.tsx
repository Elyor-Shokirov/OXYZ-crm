import { useEffect, useState } from 'react'
import BgWhiteBtn from '../button.getConsultation/bg.white.btn'
import Navbar from '../navbar/navbar'

function HomeHero() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	return (
		<div className='container max-w-360 p-2.5 mx-auto h-187.5'>
			<div className='relative h-full rounded-3xl overflow-hidden'>
				<img
					src='./img/hero_img.png'
					alt='Hero-img'
					className='absolute inset-0 w-full h-full object-cover '
					style={{
						objectPosition: isMobile ? 'calc(100% + 260px) center' : 'center',
					}}
				/>

				{/* Dark Overlay */}
				<div className='absolute inset-0 bg-black/40'></div>

				<div className='absolute top-0 left-0 right-0 z-20'>
					<Navbar transparent={true} />
				</div>

				{/* Hero Content */}
				<div className='relative z-10 pt-32 pb-16 px-8 lg:px-12 h-full flex items-center'>
					<div className='w-[90%] sm:w-[60%] lg:w-[50%]'>
						{/* Title */}
						<h1 className='font-manrope font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight text-white mb-4'>
							OXYZ — международная логистика, на которую можно положиться
						</h1>

						{/* Description */}
						<p className='font-manrope text-sm sm:text-base lg:text-lg text-white/90 mb-8 md:w-[75%] w-full'>
							Мы — компания, которая берёт на себя всё, что связано с
							международной перевозкой грузов, чтобы вы могли спокойно
							заниматься бизнесом.
						</p>

						<BgWhiteBtn title='Получить консультацию' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHero
