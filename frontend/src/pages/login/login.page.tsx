import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { lastContactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type z from 'zod'

function LoginPage() {
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

	const watchUsername = form.watch('username')
	const watchPhone = form.watch('phone_number')
	const watchCheckbox = form.watch('checkbox')

	// Button disabled bo'lishi sharti
	const isDisabled = !watchUsername || !watchPhone || !watchCheckbox

	return (
		<>
			<div className='flex items-center justify-center'>
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
		</>
	)
}

export default LoginPage
