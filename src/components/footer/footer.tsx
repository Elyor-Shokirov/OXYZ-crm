import { contacts, menuArray } from '@/constants/constants'
import BgWhiteBtn from '../button.getConsultation/bg.white.btn'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

function Footer() {
	return (
		<>
			<div className='bg-[#1A1A18] min-h-173'>
				<div className='container mx-auto p-6 md:p-0 md:pt-30 max-w-7xl'>
					<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
						<h1 className='font-manrope font-semibold text-2xl md:text-[48px] md:leading-[120%] text-white'>
							Остались вопросы?
						</h1>
						<BgWhiteBtn title='Получить консультацию' />
					</div>
					<Separator className='bg-[#393936] mt-12.5' />
					<div className='mt-12.5 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-29'>
						<div className='col-span-1 md:col-span-3'>
							<img src='/img/logo.png' alt='Logo' className='h-10 md:h-12' />
							<p className='font-manrope font-light text-base md:text-[22px] leading-[140%] text-white mt-6.25'>
								OXYZ - Ваше спокойствие, наша работа.
							</p>
							<div className='flex gap-4 mt-7.5'>
								<Button
									className='w-16 h-16 bg-[#2A2A28] hover:bg-[#3A3A38] rounded-2xl p-0 flex items-center justify-center transition-colors'
									asChild
								>
									<a
										href='https://wa.me/your-number'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='WhatsApp'
									>
										<img
											src='/img/footer_whatsapp.png'
											alt='WhatsApp'
											className='w-8 h-8'
										/>
									</a>
								</Button>

								<Button
									className='w-16 h-16 bg-[#2A2A28] hover:bg-[#3A3A38] rounded-2xl p-0 flex items-center justify-center transition-colors'
									asChild
								>
									<a
										href='https://t.me/your-username'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Telegram'
									>
										<img
											src='/img/footer_telegram.png'
											alt='Telegram'
											className='w-8 h-8'
										/>
									</a>
								</Button>

								<Button
									className='w-16 h-16 bg-[#2A2A28] hover:bg-[#3A3A38] rounded-2xl p-0 flex items-center justify-center transition-colors'
									asChild
								>
									<a
										href='https://facebook.com/your-page'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Facebook'
									>
										<img
											src='/img/footer_facebook.png'
											alt='Facebook'
											className='w-8 h-8'
										/>
									</a>
								</Button>

								<Button
									className='w-16 h-16 bg-[#2A2A28] hover:bg-[#3A3A38] rounded-2xl p-0 flex items-center justify-center transition-colors'
									asChild
								>
									<a
										href='https://instagram.com/your-profile'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Instagram'
									>
										<img
											src='/img/footer_instagram.png'
											alt='Instagram'
											className='w-8 h-8'
										/>
									</a>
								</Button>
							</div>
						</div>
						<div className='col-span-1 md:col-span-2'>
							<h2 className='font-manrope font-semibold text-xl md:text-[28px] leading-[140%] text-white'>
								Навигация
							</h2>
							<ul className='mt-6 space-y-4'>
								{menuArray.map((item, index) => (
									<li
										key={index}
										className='text-white font-manrope font-medium text-base md:text-lg hover:text-[#F07C00] transition-colors cursor-pointer'
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className='col-span-1 md:col-span-3'>
							<h2 className='font-manrope font-semibold text-xl md:text-[28px] leading-[140%] text-white'>
								Контакты
							</h2>
							<div className='mt-7.5 space-y-5'>
								{contacts.map(item => (
									<p className='font-manrope font-normal text-base/[120%] md:text-[18px]/[120%] text-white '>
										{item}
									</p>
								))}
							</div>
						</div>
						<div className='col-span-1 md:col-span-4'>
							<div className=' mb-12.5 '>
								<div style={{ position: 'relative', overflow: 'hidden' }}>
									<a
										href='https://yandex.com/maps/org/ipak_yo_li_banki/77970827202/?utm_medium=mapframe&utm_source=maps'
										style={{
											color: '#eee',
											fontSize: '12px',
											position: 'absolute',
											top: '0px',
										}}
									>
										Ipak Yo'li banki
									</a>
									<a
										href='https://yandex.com/maps/10335/tashkent/category/bank/184105398/?utm_medium=mapframe&utm_source=maps'
										style={{
											color: '#eee',
											fontSize: '12px',
											position: 'absolute',
											top: '14px',
										}}
									>
										Банк в Ташкенте
									</a>
									<iframe
										className='rounded-xl'
										src='https://yandex.com/map-widget/v1/?ll=69.351951%2C41.308278&mode=poi&poi%5Bpoint%5D=69.334244%2C41.310299&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D77970827202&z=14.5'
										width='100%'
										height='250'
										frameBorder='1'
										allowFullScreen={true}
										style={{ position: 'relative', borderRadius: '16px' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-brandcolor md:min-h-19.5 min-h-35'>
				<div className='container mx-auto p-6 md:p-0 max-w-7xl h-19.5'>
					<div className='flex flex-col md:flex-row justify-between items-center h-full gap-4 md:gap-0'>
						<p className='font-manrope font-normal text-[18px] md:text-[18px] leading-[100%] text-white'>
							© 2025 OXYZ. Все права защищены.
						</p>
						<div className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
							<p className='font-manrope font-normal text-[18px] md:text-[18px] leading-[100%] text-white hover:underline transition-all'>
								Условия использования
							</p>
							<span className='hidden md:inline text-white'>|</span>
							<p className='font-manrope font-normal text-[18px] md:text-[18px] leading-[100%] text-white hover:underline transition-all'>
								Политика конфиденциальности
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
