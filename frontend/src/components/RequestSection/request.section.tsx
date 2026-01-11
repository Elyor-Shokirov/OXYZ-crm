import { contactFormSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import SectionTitle from '../section-title/section.title'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

function RequestSection() {
	const [currentStep, setCurrentStep] = useState(1)

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			city: '',
			dilveredCity: '',
			username: '',
			phone_number: '',
			model_transport: '',
			cargo_weight: '',
			whatkind_cargo: '',
		},
	})

	const validateStep = async () => {
		let fieldsToValidate: (keyof z.infer<typeof contactFormSchema>)[] = []

		if (currentStep === 1) {
			fieldsToValidate = ['city', 'dilveredCity']
		} else if (currentStep === 2) {
			fieldsToValidate = ['whatkind_cargo', 'cargo_weight', 'model_transport']
		} else if (currentStep === 3) {
			fieldsToValidate = ['username', 'phone_number']
		}

		const result = await form.trigger(fieldsToValidate)
		return result
	}

	const handleNext = async () => {
		const isValid = await validateStep()

		if (isValid && currentStep < 3) {
			setCurrentStep(prev => prev + 1)
		}
	}

	const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
		console.log('Form submitted:', data)
		alert('Arizangiz qabul qilindi!')
		// API ga yuborish
	}

	return (
		<div className='md:mt-30 container mx-auto max-w-300 md:pb-30 p-2.5'>
			<SectionTitle
				title='Оставьте заявку и получите расчет доставки вашего груза'
				description=''
			/>

			<div className='relative mt-5 md:mt-7.5 rounded-4xl md:rounded-2xl md:overflow-hidden md:h-150'>
				{/* Background image */}
				<img
					src='./img/bg-world.svg'
					alt='Image Earth'
					className='absolute inset-0 w-full h-full object-cover rounded-4xl md:rounded-2xl -z-10'
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-black/10 rounded-4xl md:rounded-2xl'></div>

				{/* Content Grid */}
				<div className='relative flex flex-col md:grid md:grid-cols-2 gap-4 p-2.5 pb-0'>
					{/* Left Column - Form */}
					<div className='h-full flex items-center'>
						<Card className='w-full max-h-full overflow-y-auto'>
							<CardContent className='p-12.5'>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className='flex flex-col min-h-106'
									>
										{/* Form Fields */}
										<div className='flex-1 mb-8'>
											{currentStep === 1 && (
												<div className='animate-in fade-in slide-in-from-right-4 duration-300 space-y-5'>
													<FormField
														control={form.control}
														name='city'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Откуда
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='Ташкент'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name='dilveredCity'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Куда
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='Москва'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
											)}

											{currentStep === 2 && (
												<div className='animate-in fade-in slide-in-from-right-4 duration-300 space-y-5'>
													<FormField
														control={form.control}
														name='whatkind_cargo'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Какой груз
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='Цемент'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name='cargo_weight'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Вес груза
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='10 тонн'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name='model_transport'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Вид транспорта
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='Фура'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
											)}

											{currentStep === 3 && (
												<div className='animate-in fade-in slide-in-from-right-4 duration-300 space-y-5'>
													<FormField
														control={form.control}
														name='username'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Имя
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='Введите ваше имя'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name='phone_number'
														render={({ field }) => (
															<FormItem>
																<FormLabel className='font-manrope font-medium md:text-base mb-1'>
																	Номер телефона
																</FormLabel>
																<FormControl>
																	<Input
																		placeholder='+998'
																		className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:leading-[100%] placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
																		{...field}
																	/>
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
											)}
										</div>

										{/* Button */}
										<div className='mt-auto mb-6'>
											{currentStep < 3 ? (
												<Button
													type='button'
													onClick={handleNext}
													className='w-full h-14 text-base font-semibold bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ff7a00] hover:to-[#ff5500] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl'
												>
													Далее
												</Button>
											) : (
												<Button
													type='submit'
													className='w-full h-14 text-base font-semibold bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ff7a00] hover:to-[#ff5500] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl'
												>
													Расчитать стоимость
												</Button>
											)}
										</div>

										{/* Progress Steps */}
										<div className='flex items-center gap-3'>
											{/* Step 1 - Позиция */}
											<div className='flex-1'>
												<div className='flex items-center gap-2 mb-1'>
													<span
														className={`text-xs font-normal ${
															currentStep === 1
																? 'text-gray-900'
																: 'text-gray-400'
														}`}
													>
														Позиция
													</span>
												</div>
												<div
													className={`h-1 rounded-full transition-all duration-300 ${
														currentStep >= 1
															? 'bg-gradient-to-r from-[#ff8c00] to-[#ff6b00]'
															: 'bg-gray-200'
													}`}
												/>
											</div>

											{/* Step 2 - Груз */}
											<div className='flex-1'>
												<div className='flex items-center gap-2 mb-1'>
													<span
														className={`text-xs font-normal ${
															currentStep === 2
																? 'text-gray-900'
																: 'text-gray-400'
														}`}
													>
														Груз
													</span>
												</div>
												<div
													className={`h-1 rounded-full transition-all duration-300 ${
														currentStep >= 2
															? 'bg-gradient-to-r from-[#ff8c00] to-[#ff6b00]'
															: 'bg-gray-200'
													}`}
												/>
											</div>

											{/* Step 3 - Заказчик */}
											<div className='flex-1'>
												<div className='flex items-center gap-2 mb-1'>
													<span
														className={`text-xs font-normal ${
															currentStep === 3
																? 'text-gray-900'
																: 'text-gray-400'
														}`}
													>
														Заказчик
													</span>
												</div>
												<div
													className={`h-1 rounded-full transition-all duration-300 ${
														currentStep >= 3
															? 'bg-gradient-to-r from-[#ff8c00] to-[#ff6b00]'
															: 'bg-gray-200'
													}`}
												/>
											</div>
										</div>
									</form>
								</Form>
							</CardContent>
						</Card>
					</div>

					{/* Right Column - Girl Image */}
					<div className='flex items-end justify-center md:justify-end'>
						<img
							src='/img/girl_img.png'
							alt='Girl'
							className='w-auto max-h-125 md:h-full object-contain object-bottom'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RequestSection
