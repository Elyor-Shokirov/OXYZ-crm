// src/components/Navbar/Navbar.tsx
import { menuArray } from '@/constants/constants'
import { Link } from 'react-router'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'

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
						<img src='/img/logo.png' alt='OXYZ' className='h-12' />
					</Link>
					<div className='flex items-center gap-4'>
						<div
							className={`text-right hidden md:block ${
								transparent ? 'text-white' : 'text-gray-900 relative '
							}`}
						>
							<div className='flex gap-2 justify-end'>
								<img
									src='/img/active_icon.svg'
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
								<img src='/img/whatsapp_2.svg' alt='WhatsApp' />
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

						{/* Menu Sheet */}
						<Sheet>
							<SheetTrigger className='bg-white text-black px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors'>
								Меню
								<img src='/img/menu_icon.svg' alt='Menu' className='w-5 h-5' />
							</SheetTrigger>

							<SheetContent
								side='right'
								className='w-full sm:max-w-md bg-white px-20 py-12.5 items-end text-right'
							>
								<SheetClose className='absolute left-0 top-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity'>
									<span className='sr-only'>Закрыть</span>
								</SheetClose>
								{/* MENU */}
								<nav className='mt-24 space-y-4 w-full px-6 flex flex-col justify-center'>
									{menuArray.map((item, index) => (
										<SheetClose asChild key={index}>
											<Link
												to={item.route}
												className='block py-2 font-manrope text-2xl font-semibold
                       text-gray-900 hover:text-brandcolor transition-colors'
											>
												{item.name}
											</Link>
										</SheetClose>
									))}
								</nav>

								{/* FOOTER */}
								<div className='mt-auto w-full px-6 space-y-6 text-right'>
									{/* Work time */}
									<div className='space-y-3'>
										<div className='flex items-center justify-end gap-2 text-sm text-gray-600'>
											<span className='w-2 h-2 bg-green-500 rounded-full'></span>
											<span className='font-manrope'>
												Пн–Сб, с 9:00 до 18:00
											</span>
										</div>

										{/* Phones */}
										<div className='space-y-2'>
											<a
												href='tel:+998908232232'
												className='block font-manrope text-xl font-semibold text-gray-900 hover:text-brandcolor transition-colors'
											>
												+99890-823-22-32
											</a>
											<a
												href='tel:+998995365747'
												className='block font-manrope text-xl font-semibold text-gray-900 hover:text-brandcolor transition-colors'
											>
												+99899-536-57-47
											</a>
										</div>
									</div>

									{/* SOCIAL */}
									<div className='flex justify-end gap-3'>
										<Button
											className='w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl p-0 flex items-center justify-center transition-colors'
											asChild
										>
											<a
												href='https://wa.me/998908232232'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src='/img/footer_whatsapp.png'
													alt='WhatsApp'
													className='w-6 h-6'
												/>
											</a>
										</Button>

										<Button
											className='w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl p-0 flex items-center justify-center transition-colors'
											asChild
										>
											<a
												href='https://t.me/your-username'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src='/img/footer_telegram.png'
													alt='Telegram'
													className='w-6 h-6'
												/>
											</a>
										</Button>

										<Button
											className='w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl p-0 flex items-center justify-center transition-colors'
											asChild
										>
											<a
												href='https://facebook.com/your-page'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src='/img/footer_facebook.png'
													alt='Facebook'
													className='w-6 h-6'
												/>
											</a>
										</Button>

										<Button
											className='w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl p-0 flex items-center justify-center transition-colors'
											asChild
										>
											<a
												href='https://instagram.com/your-profile'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src='/img/footer_instagram.png'
													alt='Instagram'
													className='w-6 h-6'
												/>
											</a>
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
