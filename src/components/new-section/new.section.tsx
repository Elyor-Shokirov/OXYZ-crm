import { newsArrays } from '@/constants/constants'
import { cn } from '@/lib/utils'
import { useNavigate } from 'react-router'
import SectionTitle from '../section-title/section.title'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

function NewSection() {
	const navigate = useNavigate()

	const onDetailCourse = (slug: string) => {
		navigate(`/news/${slug}`)
	}

	const currentPath = location.pathname.split('/')[1]

	return (
		<>
			<div
				className={cn(
					' min-h-247.25',
					currentPath === 'news' ? 'bg-white' : 'bg-[#F7F7F6]'
				)}
			>
				<div className='container mx-auto max-w-7xl p-2.5 md:pt-30 pt-15 pb-15'>
					<SectionTitle
						title='Новости и обновления'
						description='Следите за важными событиями, достижениями компании и новыми проектами — всё самое важное в одном месте'
					/>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-11.5'>
						{newsArrays.slice(0, 3).map(item => (
							<Card
								key={item.date}
								className={cn(
									'p-2.5 min-h-143',
									currentPath === 'news' ? 'bg-[#F7F7F6]' : 'bg-white'
								)}
							>
								<CardContent className='p-0 flex flex-col h-full'>
									<img
										src={item.image}
										alt={item.title}
										className='w-full min-h-64.5 object-cover rounded-lg'
									/>
									<div className='px-2.5 flex-1'>
										<h2 className='font-manrope font-semibold text-2xl/[120%] md:text-2xl/[120%] mt-5'>
											{item.title}
										</h2>
										<p className='text-[#A7A6A1] font-manrope text-base/[140%] md:text-base/[140%] mt-2.5 font-normal line-clamp-5'>
											{item.descripton}
										</p>
									</div>
									<div className='flex justify-between items-center px-2.5 mt-auto pt-4'>
										<Button
											variant={'ghost'}
											className='font-manrope underline cursor-pointer font-medium md:text-[20px]/[100%] text-[20px]/[100%]'
											onClick={() => onDetailCourse(item.slug)}
										>
											Читать статью
										</Button>
										<p className='text-[14px]/[100%] font-manrope text-[#A7A6A1] md:text-[14px]/[100%] font-medium'>
											{item.date}
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

export default NewSection
