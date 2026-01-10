import z from 'zod'

export const contactFormSchema = z.object({
	city: z.string().min(2).max(50),
	dilveredCity: z.string().min(2).max(50),
	username: z.string().min(2).max(50),
	phone_number: z.string().min(2).max(50),
	model_transport: z.string().min(2).max(50),
	cargo_weight: z.string().min(2).max(50),
	whatkind_cargo: z.string().min(2).max(50),
})

export const lastContactSchema = z.object({
	username: z
		.string()
		.min(2, 'Имя слишком короткое')
		.max(50, 'Имя слишком длинное'),

	phone_number: z
		.string()
		.min(9, 'Неверный номер телефона')
		.max(20, 'Неверный номер телефона'),

	checkbox: z.boolean().refine(val => val === true, {
		message: 'Необходимо согласие',
	}),
})
