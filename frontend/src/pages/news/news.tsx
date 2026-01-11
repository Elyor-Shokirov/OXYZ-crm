import NewSection from '@/components/new-section/new.section'
import PageNavbar from '@/components/page-navbar/page.navbar'
import RequestSection from '@/components/RequestSection/request.section'

function NewsPage() {
	return (
		<>
			<PageNavbar title='Новости' />
			<NewSection />
			<RequestSection />
		</>
	)
}

export default NewsPage
