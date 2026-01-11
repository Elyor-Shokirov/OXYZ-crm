import ContactComponent from '@/components/contact-component/contact.component'
import PageNavbar from '@/components/page-navbar/page.navbar'

function ContactPage() {
	return (
		<>
			<PageNavbar title='Контакты' />
			<ContactComponent />
		</>
	)
}

export default ContactPage
