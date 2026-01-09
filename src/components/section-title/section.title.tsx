import type { SectionTitleProps } from './section-title.props'

function SectionTitle({ title, description }: SectionTitleProps) {
	return (
		<>
			<div className='flex items-center justify-center gap-2.5 flex-col sm:px-2.5'>
				<h1 className='font-manrope font-semibold text-[28px] md:text-5xl leading-[120%] tracking-normal text-center flex items-center justify-center max-w-213.5'>
					{title}
				</h1>
				<p className='font-manrope font-normal text-base md:text-xl leading-[140%] tracking-normal text-center flex items-center justify-center max-w-182.5'>
					{description}
				</p>
			</div>
		</>
	)
}

export default SectionTitle
