import { contactInfo } from '@/constants/constants'
import { lastContactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type z from 'zod'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

function ContactComponent() {
	const form = useForm<z.infer<typeof lastContactSchema>>({
		resolver: zodResolver(lastContactSchema),
		defaultValues: {
			username: '',
			phone_number: '',
			checkbox: false,
		},
	})

	const onSubmit = (data: z.infer<typeof lastContactSchema>) => {
		console.log(data)
	}

	// Form qiymatlarini kuzatish
	// eslint-disable-next-line react-hooks/incompatible-library
	const watchUsername = form.watch('username')
	const watchPhone = form.watch('phone_number')
	const watchCheckbox = form.watch('checkbox')

	// Button disabled bo'lishi sharti
	const isDisabled = !watchUsername || !watchPhone || !watchCheckbox

	return (
		<div className='container mx-auto max-w-7xl px-4 py-12 md:py-20'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
				{/* Left */}
				<div>
					<h2 className='font-bold text-4xl md:text-5xl mb-10'>Контакты</h2>

					<div className='space-y-6 mt-25'>
						{contactInfo.map((item, index) => (
							<div key={index} className='flex gap-4'>
								<div className='bg-[#E5E4E2] rounded-lg p-2 shrin w-11 h-11 flex justify-center items-center'>
									<img
										src={item.icon}
										alt={item.label}
										className='w-5 h-5 object-cover'
									/>
								</div>

								<div>
									<p className='text-sm text-[#84837D] mb-1'>{item.label}</p>

									{item.link ? (
										<a
											href={item.link}
											className='font-semibold text-lg hover:text-[#FF8A00]'
										>
											{item.value}
										</a>
									) : (
										<p className='font-semibold text-lg'>{item.value}</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right */}
				<div>
					<h2 className='font-bold text-4xl md:text-5xl mb-10'>
						Ответим в течение дня, заполните форму
					</h2>
					<Card className='rounded-xl bg-[#F7F7F6] border-0 h-[550px]'>
						<CardContent className='p-5 h-full'>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='flex flex-col justify-between h-full'
								>
									{/* Form Fields - Yuqori qism */}
									<div className='space-y-5'>
										<FormField
											control={form.control}
											name='username'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='font-manrope font-medium text-base mb-1'>
														Имя
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Введите ваше имя'
															className='w-full min-h-14 font-manrope p-5  placeholder:font-manrope placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
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
													<FormLabel className='font-manrope font-medium text-base mb-1'>
														Номер телефона
													</FormLabel>
													<FormControl>
														<Input
															placeholder='+998'
															className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name='checkbox'
										render={({ field }) => (
											<FormItem className='flex items-start gap-3'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className='text-sm text-[#84837D] leading-snug'>
													Соглашаюсь на обработку персональных данных
												</FormLabel>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type='submit'
										disabled={isDisabled}
										className='w-full h-14 bg-[#FFDB85] hover:bg-[#FFC866] active:scale-[0.98] text-[#FFFAEA] font-manrope font-semibold text-lg rounded-lg transition-all duration-300  hover:shadow-xl'
									>
										Отправить
									</Button>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default ContactComponent
