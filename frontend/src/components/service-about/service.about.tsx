import { ourServiceArray } from '@/constants/constants'
import BgBrandColor from '../button.getConsultation/bg.brandcolor'
import RequestSection from '../RequestSection/request.section'
import SectionTitle from '../section-title/section.title'

function ServiceAbout() {
	return (
		<>
			<div className='container mx-auto max-w-7xl md:mt-30 mt-12.5 px-4'>
				<SectionTitle
					title='Наши услуги'
					description='Оставьте заявку и получите расчет доставки вашего груза'
				/>
				<div className='flex flex-col gap-12.5 mt-12.5 '>
					{ourServiceArray.map((item, index) => (
						<div
							key={index}
							className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
								index % 2 === 0 ? '' : 'md:flex-row-reverse'
							}`}
						>
							<div
								className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
							>
								<h1 className='font-manrope font-bold text-[36px] leading-[120%] text-[#1A1A18]'>
									{item.title}
								</h1>
								<p className='font-manrope font-medium text-[20px] leading-[140%] text-[#84837D] mt-2.5'>
									{item.description}
								</p>
								<div className='mt-12.5'>
									<BgBrandColor title='Получить консультацию' />
								</div>
							</div>

							<div
								className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
							>
								<img
									src={item.image}
									alt={item.title}
									className='w-full h-120 object-cover rounded-xl'
								/>
							</div>
						</div>
					))}
				</div>
				<RequestSection />
			</div>
		</>
	)
}

export default ServiceAbout
