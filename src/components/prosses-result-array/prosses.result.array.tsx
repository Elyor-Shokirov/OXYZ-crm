import { proccessResultArrayObject } from '@/constants/constants'
import { useState } from 'react'
import { Card, CardContent } from '../ui/card'

function ProssesResultArray() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<>
			<div className='container mx-auto p-6 md:p-0 max-w-7xl'>
				<div className='mt-15 md:mt-30 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:pb-30 pb-15'>
					<div className='space-y-3.75'>
						<h1 className='font-manrope font-semibold text-[40px]/[140%]'>
							Прозрачный процесс — предсказуемый результат
						</h1>
						<p className='font-manrope font-normal text-base md:text-[20px]/[140%]'>
							Мы ценим ваше время и стремимся к максимальной эффективности.
							Поэтому каждый проект строим по чёткой системе: от первого запроса
							до финальной сдачи. Ни одного лишнего шага — только то, что
							действительно работает. Ознакомьтесь с этапами сотрудничества.
						</p>
					</div>
					<div className='grid grid-cols-[80px_1fr] gap-4'>
						{/* Border line - uzluksiz */}
						<div className='relative border-r border-[#CAC9C5] flex flex-col items-center gap-5'>
							{/* Hover border overlay */}
							{hoveredIndex !== null && (
								<div
									className='absolute right-0 w-0.5 bg-orange-500 transition-all duration-300'
									style={{
										top: `${hoveredIndex * (200 + 20)}px`, // 200px min-height + 20px gap
										height: '200px',
									}}
								/>
							)}

							{proccessResultArrayObject.map((item, index) => (
								<div key={index} className='min-h-50 pt-2 max-w-20'>
									<p
										className={`font-manrope font-medium text-2xl transition-colors duration-300 ${
											hoveredIndex === index
												? 'text-brandcolor'
												: 'text-[#6A6962]'
										}`}
									>
										{item.number}
									</p>
								</div>
							))}
						</div>

						{/* Cards - bo'shliq bilan */}
						<div className='space-y-5'>
							{proccessResultArrayObject.map((item, index) => (
								<Card
									key={index}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									className={`w-full border-0 p-5 min-h-50 rounded-xl cursor-pointer transition-all duration-300 ${
										hoveredIndex === index
											? 'bg-brandcolor shadow-lg'
											: 'bg-[#F7F7F6]'
									}`}
								>
									<CardContent className='p-0'>
										<h3
											className={`font-manrope font-semibold text-[28px]/[120%] md:text-[32px]/[120%] mb-2 transition-colors duration-300 ${
												hoveredIndex === index ? 'text-white' : 'text-black'
											}`}
										>
											{item.title}
										</h3>
										<p
											className={`font-manrope text-base/[140%] md:text-lg/[140%] font-medium transition-colors duration-300 ${
												hoveredIndex === index ? 'text-white' : 'text-[#A7A6A1]'
											}`}
										>
											{item.desc}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProssesResultArray
