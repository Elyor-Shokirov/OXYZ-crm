import { aboutSectionArray } from '@/constants/constants'
import { Card, CardContent } from '../ui/card'

function AboutComponent() {
	return (
		<>
			<div className=' bg-[#F7F7F6] min-h-213.5 mt-15'>
				<div className='container mx-auto px-2.5 md:px-0 max-w-7xl h-full pt-15 md:pt-30 pb-15 md:pb-30'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
						<div className=''>
							<Card className='min-h-100 border-0 rounded-xl p-5 h-full'>
								<CardContent className='flex flex-col justify-between p-0 h-full'>
									<h1 className='font-manrope font-medium leading-[140%] text-xl md:text-2xl text-[36px]'>
										О компании OXYZ
									</h1>
									<div className='flex flex-col space-y-8'>
										<p className='font-manrope text-[16px] leading-[140%] font-light'>
											Ваше спокойствие — наша работа. Мы — логистическая
											компания, которая не просто перевозит грузы, а строит
											понятные, честные и надёжные процессы для вашего бизнеса.
										</p>
										<p>
											С 2022 года мы помогаем компаниям безболезненно и вовремя
											доставлять грузы с Европы и стран СНГ. Наша основная
											специализация — скоропортящиеся грузы в рефрижераторах.
											Также организуем перевозки тентованным транспортом:
											оборудование, техника, ТНП и т.п.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
						<div className='md:max-h-100 h-100'>
							<img
								src='/img/about_img.jpg'
								className='h-full w-full object-cover rounded-xl'
							/>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-2.5'>
						{aboutSectionArray.map((item, index) => (
							<Card
								key={index}
								className='border-0 p-5 rounded-xl min-h-51 h-full'
							>
								<CardContent className='p-0 flex flex-col justify-between h-full gap-4'>
									{/* Yechim 1: Kattaroq o'lcham */}
									<img
										src={item.icon}
										alt=''
										className='w-12 h-12 object-contain'
									/>
									<div className='flex flex-col gap-1.5'>
										<h1 className='text-3xl md:text-3xl lg:text-4xl font-bold leading-[100%] font-manrope'>
											{item.title}
										</h1>
										<p className='text-base md:text-base font-manrope leading-[120%] font-light'>
											{item.desc}
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

export default AboutComponent
