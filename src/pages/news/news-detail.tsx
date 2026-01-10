import NewSection from '@/components/new-section/new.section'
import PageNavbar from '@/components/page-navbar/page.navbar'
import { newsArrays } from '@/constants/constants'
import { useParams } from 'react-router'

function NewsDetail() {
	const { slug } = useParams<{ slug: string }>()

	const news = newsArrays.find(item => item.slug === slug)

	console.log(news)

	return (
		<>
			<PageNavbar title='Новости' />
			<div className='container mx-auto max-w-7xl p-10'>
				<div>
					<h1 className='font-manrope font-semibold text-[48px]/[120%]'>
						{news?.title}
					</h1>
					<img
						src={news?.image}
						alt='News Image'
						className='w-full h-125 object-cover mt-12.5 rounded-xl'
					/>
					<p className='font-manrope font-light text-[20px]/[140%] text-justify mt-5'>
						{news?.text}
					</p>
				</div>
			</div>
			<NewSection />
		</>
	)
}

export default NewsDetail
