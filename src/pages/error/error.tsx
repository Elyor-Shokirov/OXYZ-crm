function ErrorPage() {
	return (
		<>
			<div className=' text-center'>
				<section className='py-10 px-4'>
					<div className='container mx-auto h-screen'>
						<div className='flex justify-center items-center'>
							<div className='w-full sm:w-10/12 text-center'>
								{/* <!-- 404 Background --> */}
								<div
									className='h-96 bg-center bg-no-repeat bg-cover flex items-center justify-center'
									style={{
										backgroundImage:
											"url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
									}}
								>
									<h1 className='text-7xl sm:text-8xl font-bold'>404</h1>
								</div>

								{/* <!-- Content Box --> */}
								<div className='-mt-12'>
									<h3 className='text-3xl sm:text-4xl font-bold mb-4'>
										Look like you're lost
									</h3>
									<p className='text-gray-600 mb-5'>
										the page you are looking for not available!
									</p>
									<a
										href='/'
										className='inline-block bg-brandcolor hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded transition-colors duration-300'
									>
										Go to Home
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default ErrorPage
