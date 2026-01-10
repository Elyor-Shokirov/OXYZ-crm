import { whyusArray } from '@/constants/constants'
import { cn } from '@/lib/utils'
import SectionTitle from '../section-title/section.title'
import { Card, CardContent } from '../ui/card'

function WhyUs() {
	const currentPath = location.pathname.split('/')[1]

	return (
		<>
			<div
				className={cn(
					'min-h-246.5',
					currentPath === 'about' ? 'bg-white' : 'bg-[#F7F7F6]'
				)}
			>
				<div className='container mx-auto px-2.5 pt-15 md:pt-30 max-w-7xl'>
					<SectionTitle
						title='Почему именно мы?'
						description='Оставьте заявку и получите расчет доставки вашего груза'
					/>
					<div className='mt-7.5 grid grid-cols-1 md:grid-cols-2 gap-2'>
						{whyusArray.map((item, index) => (
							<Card
								key={index}
								className={cn(
									'border-0 min-h-50 rounded-2xl p-5',
									currentPath === 'about' ? 'bg-[#F7F7F6]' : 'bg-white'
								)}
							>
								<CardContent className='flex flex-col justify-between h-full p-0'>
									<div className='flex justify-between items-start mb-4'>
										<p className='font-manrope text-2xl md:text-3xl font-semibold leading-[100%]'>
											{item.title}
										</p>
										<img src={item.icon} alt='' className='shrink-0' />
									</div>

									<div className='mt-auto'>
										<p className='font-manrope text-[20px] text-[#A7A6A1]  font-light'>
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

export default WhyUs
