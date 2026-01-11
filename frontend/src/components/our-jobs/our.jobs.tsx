import BgBrandColor from '../button.getConsultation/bg.brandcolor'
import SectionTitle from '../section-title/section.title'

function OurJobs() {
	return (
		<div className='mt-15 md:mt-30 container mx-auto max-w-300'>
			<div className='relative h-128.5 flex justify-center items-center flex-col'>
				<img
					src='./img/bg-world.svg'
					alt='Image Earth'
					className='absolute inset-0 w-full h-full md:object-fill object-cover'
				/>
				<div className='relative px-8 h-full flex items-center flex-col gap-7.5 justify-center'>
					<SectionTitle
						title='Ваше спокойствие — наша работа'
						description='Сделать международную логистику понятной, надёжной и спокойной. Чтобы
					вы могли доверить нам груз — и не волноваться.'
					/>
					<div>
						<BgBrandColor title='Узнать больше о нас' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurJobs
