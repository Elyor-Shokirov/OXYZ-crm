// src/components/Navbar/Navbar.tsx
import { Link } from 'react-router'
import { Button } from '../ui/button'

interface NavbarProps {
	transparent?: boolean
}

function Navbar({ transparent = false }: NavbarProps) {
	return (
		<nav
			className={`${
				transparent
					? 'absolute top-0 left-0 right-0 z-20'
					: 'bg-white shadow-sm'
			}`}
		>
			<div className='container max-w-360 mx-auto px-4 py-6'>
				<div className='flex items-center justify-between'>
					<Link to={'/'} className='flex items-center gap-2'>
						<img src='./img/logo.png' alt='OXYZ' className='h-12' />
					</Link>
					<div className='flex items-center gap-4'>
						<div
							className={`text-right hidden md:block ${
								transparent ? 'text-white' : 'text-gray-900 relative '
							}`}
						>
							<div className='flex gap-2 justify-end'>
								<img
									src='./img/active_icon.svg'
									alt='Active-icon'
									className='absalute top-0 left-0'
								/>
								<p className='text-sm font-manrope font-light'>
									Пн-Сб, с 9:00 до 18:00
								</p>
							</div>
							<a href='tel:+998908232232' className='text-xl font-manrope'>
								+99890-823-22-32
							</a>
						</div>

						{/* Icons */}
						<div className='md:flex gap-2 hidden'>
							<Button
								className={`w-12.5 h-12.5 rounded-lg flex items-center justify-center ${
									transparent
										? 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
										: 'bg-gray-100 hover:bg-gray-200'
								}`}
							>
								<img src='/img/flag.png' alt='RU' className='w-5 h-5' />
							</Button>
							<Button
								className={`w-12.5 h-12.5 rounded-lg flex items-center justify-center ${
									transparent
										? 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
										: 'bg-gray-100 hover:bg-gray-200'
								}`}
							>
								<img src='/img/whatsapp_2.svg' alt='' />
							</Button>
							<Button
								className={`w-12.5 h-12.5 rounded-lg flex items-center justify-center ${
									transparent
										? 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
										: 'bg-gray-100 hover:bg-gray-200'
								}`}
							>
								<img
									src='/img/telegram_meni_icon.svg'
									alt='Telegram'
									className='w-5 h-5'
								/>
							</Button>
						</div>

						{/* Menu Button */}
						<button className='bg-white text-black px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100'>
							Меню
							<img
								src='/img/menu_icon.svg'
								alt='Telegram'
								className='w-5 h-5'
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
