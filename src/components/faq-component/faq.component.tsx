import { faqArray } from '@/constants/constants'
import { useState } from 'react'
import SectionTitle from '../section-title/section.title'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion'

function FaqComponent() {
	const [openItem, setOpenItem] = useState<string>('item-0')

	return (
		<>
			<div className='container mx-auto p-6 md:pt-30 max-w-7xl mt-15'>
				<SectionTitle title='Часто задаваемые вопросы' description='' />
				<div className='mt-7.5'>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						value={openItem}
						onValueChange={setOpenItem}
					>
						{faqArray.map((item, index) => {
							const itemValue = `item-${index}`
							const isOpen = openItem === itemValue

							return (
								<AccordionItem
									key={index}
									value={itemValue}
									className='border-b border-[#E5E5E5]'
								>
									<AccordionTrigger className='py-6 hover:no-underline [&>svg]:hidden'>
										<div className='flex items-center justify-between w-full gap-6'>
											<div className='flex items-center gap-6'>
												<span className='text-[#D1D1D1] font-manrope text-[24px]/[120%] md:text-[36px]/[120%] font-semibold '>
													{String(index + 1).padStart(2, '0')}
												</span>
												<span className='text-[#1A1A18] font-manrope text-[20px]/[140%] md:text-[24px]/[140%]font-medium ml-5'>
													{item.question}
												</span>
											</div>
											<div
												className={`flex items-center justify-center w-8.75 h-8.75 rounded-lg shrink-0 transition-colors ${
													isOpen ? 'bg-[#F07C00]' : 'bg-[#F5F5F5]'
												}`}
											>
												<span
													className={`text-2xl font-light ${
														isOpen ? 'text-white' : 'text-[#1A1A18]'
													}`}
												>
													{isOpen ? '−' : '+'}
												</span>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-6'>
										<div className='ml-22'>
											<p className='text-[#6B6B6B] font-manrope text-base md:text-[18px] leading-[140%] font-normal'>
												{item.answer}
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
							)
						})}
					</Accordion>
				</div>
			</div>
		</>
	)
}

export default FaqComponent
