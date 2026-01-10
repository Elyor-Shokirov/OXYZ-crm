import ButtonArrowIcon from '@/icons/button.arrow.icon'
import { lastContactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type z from 'zod'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import type { GetIconProps } from './types.button'

function BgWhiteBtn({ title }: GetIconProps) {
	const form = useForm<z.infer<typeof lastContactSchema>>({
		resolver: zodResolver(lastContactSchema),
		defaultValues: {
			username: '',
			phone_number: '',
			checkbox: false,
		},
		mode: 'onChange', // Real-time validation uchun
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
		<Dialog>
			<DialogTrigger className='hover:bg-gray-100 text-black font-manrope pl-6 pr-1.25 py-4 text-base h-16 flex items-center gap-3 bg-white rounded-xl'>
				{title}
				<div className='w-13.5 h-13.5 rounded-lg flex items-center justify-center ml-5 bg-brandcolor border-0'>
					<ButtonArrowIcon iconcolor='#fff' />
				</div>
			</DialogTrigger>

			<DialogContent>
				<Card className='rounded-xl border-0 h-[550px] shadow-none'>
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
														className='w-full min-h-14 font-manrope p-5 placeholder:font-manrope placeholder:text-base placeholder:font-medium placeholder:text-[#CAC9C5]'
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

								{/* Checkbox + Button - Pastki qism */}
								<div className='space-y-5'>
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
										className='w-full h-14 bg-[#FFDB85] hover:bg-[#FFC866] active:scale-[0.98] text-white font-manrope font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FFDB85] disabled:hover:scale-100'
									>
										Отправить
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</DialogContent>
		</Dialog>
	)
}

export default BgWhiteBtn
