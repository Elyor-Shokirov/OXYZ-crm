import { ourServiceArray } from '@/constants/constants'
import ArrowUpIcon from '@/icons/arrow-up.icon'
import SectionTitle from '../section-title/section.title'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

function OurService() {
	return (
		<>
			<div className='container mx-auto max-w-7xl'>
				<div className='mt-15 md:mt-30 '>
					<SectionTitle
						title='Наши услуги'
						description='Оставьте заявку и получите расчет доставки вашего груза'
					/>
					<div className='mt-7.5 grid grid-cols-1 md:grid-cols-3 gap-4 p-2.5 md:p-0'>
						{ourServiceArray.map((item, index) => (
							<Card
								key={index}
								className='p-0 overflow-hidden group cursor-pointer h-120 border-0 rounded-2xl relative'
							>
								<CardContent className='p-0 relative h-full'>
									<img
										src={item.image}
										alt='Service Image'
										className='w-full h-full object-cover'
									/>
									<Button className='absolute top-4 w-13.5 h-13.5 right-4 z-40 bg-white p-0 rounded border-0 group-hover:bg-orange-500 transition-all duration-300 flex items-center justify-center'>
										<ArrowUpIcon className='text-[#1A1A18] group-hover:text-white transition-colors duration-300 w-10 h-10' />
									</Button>
									<div
										className='absolute bottom-0 left-0 right-0 z-10 flex items-end px-6 py-4'
										style={{
											height: '30%',
											backdropFilter: 'blur(8px)',
											maskImage:
												'linear-gradient(to bottom, transparent 0%, black 30%, black 80%)',
											WebkitMaskImage:
												'linear-gradient(to bottom, transparent 0%, black 30%, black 80%)',
										}}
									>
										<div
											style={{
												backdropFilter: 'blur(42px)',
												WebkitBackdropFilter: 'blur(42px)',
											}}
										>
											<p className='text-white font-medium text-2xl md:text-2xl lg:text-[30px] leading-[120%] font-manrope'>
												{item.title}
											</p>
										</div>
									</div>
									<div
										className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'
										style={{
											background:
												'linear-gradient(to top, rgba(240, 124, 0, 1) 0%, rgba(240, 124, 0, 0) 200%)',
											backdropFilter: 'blur(50px)',
											WebkitBackdropFilter: 'blur(50px)',
											maskImage:
												'linear-gradient(to top, black 0%, transparent 200%)',
											WebkitMaskImage:
												'linear-gradient(to top, black 0%, transparent 200%)',
										}}
									/>

									{/* Hover text content */}
									<div className='absolute inset-0 flex flex-col items-center justify-end text-white p-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-2xl md:text-3xl font-bold  mb-3'>
											{item.title}
										</p>
										<p className='text-base leading-[140%] font-extralight'>
											{item.description}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default OurService
