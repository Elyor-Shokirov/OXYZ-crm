import AboutComponent from '@/components/about-component/about.component'
import FaqComponent from '@/components/faq-component/faq.component'
import HomeHero from '@/components/hero/home.hero'
import NewSection from '@/components/new-section/new.section'
import OurJobs from '@/components/our-jobs/our.jobs'
import OurService from '@/components/our.service/our.service'
import ProssesResultArray from '@/components/prosses-result-array/prosses.result.array'
import RequestSection from '@/components/RequestSection/request.section'
import WhyUs from '@/components/why.us/why.us'

function Home() {
	return (
		<div>
			<HomeHero />
			<OurJobs />
			<RequestSection />
			<WhyUs />
			<OurService />
			<AboutComponent />
			<ProssesResultArray />
			<NewSection />
			<FaqComponent />
			<RequestSection />
		</div>
	)
}

export default Home
