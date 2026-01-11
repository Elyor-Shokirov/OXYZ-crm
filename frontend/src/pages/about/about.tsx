import AboutComponent from '@/components/about-component/about.component'
import FaqComponent from '@/components/faq-component/faq.component'
import PageNavbar from '@/components/page-navbar/page.navbar'
import ProssesResultArray from '@/components/prosses-result-array/prosses.result.array'
import RequestSection from '@/components/RequestSection/request.section'
import WhyUs from '@/components/why.us/why.us'

function About() {
	return (
		<>
			<PageNavbar title='О нас' />
			<WhyUs />
			<AboutComponent />
			<ProssesResultArray />
			<FaqComponent />
			<RequestSection />
		</>
	)
}

export default About
