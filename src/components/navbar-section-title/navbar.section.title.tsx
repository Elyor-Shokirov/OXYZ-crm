import { newsArrays } from '@/constants/constants'
import { cn } from '@/lib/utils'
import { useLocation, useParams } from 'react-router'

export interface TitleProps {
	title: string
}

function NavbarSectionTitle({ title }: TitleProps) {
	const location = useLocation()
	const { slug } = useParams<{ slug: string }>()

	// Slug bor yoki yo'qligini tekshirish
	const pathSegments = location.pathname.split('/').filter(Boolean)
	const hasSlug = pathSegments.length > 1

	// Agar news detail sahifa bo'lsa, news title'ni olish
	let slugTitle = ''
	if (slug && hasSlug) {
		const news = newsArrays.find(item => item.slug === slug)
		slugTitle = news?.title || slug
	}

	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='font-manrope font-bold text-[36px] md:text-[64px]/[110%] text-white'>
					{hasSlug && slugTitle ? slugTitle : title}
				</h1>
				<div className='flex justify-center items-center gap-2.5 mt-3.75'>
					<p className='font-manrope text-white text-[20px]/[120%] font-medium'>
						Главная
					</p>
					<span className='font-manrope text-white text-[20px]/[120%] font-medium'>
						/
					</span>
					<span
						className={cn(
							'font-manrope font-medium text-[20px]/[120%] text-white/50',
							pathSegments ? 'text-white' : "text-white/50'"
						)}
					>
						{title}
					</span>

					{/* Agar slug bo'lsa, qo'shimcha breadcrumb */}
					{hasSlug && slugTitle && (
						<>
							<span className='font-manrope text-white text-[20px]/[120%] font-medium'>
								/
							</span>
							<span className='font-manrope font-medium text-[20px]/[120%] text-white/30 truncate max-w-[200px]'>
								{slugTitle}
							</span>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default NavbarSectionTitle
