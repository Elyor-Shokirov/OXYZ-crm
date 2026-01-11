import z from 'zod'

export const contactFormSchema = z.object({
	city: z
		.string()
		.min(2, 'Город отправления обязателен')
		.max(50, 'Название города слишком длинное'),

	dilveredCity: z
		.string()
		.min(2, 'Город доставки обязателен')
		.max(50, 'Название города слишком длинное'),

	username: z.string().min(2, 'Введите имя').max(50, 'Имя слишком длинное'),

	phone_number: z
		.string()
		.regex(/^\+998\d{9}$/, 'Номер должен быть в формате +998XXXXXXXXX'),

	model_transport: z
		.string()
		.min(2, 'Укажите модель транспорта')
		.max(50, 'Название слишком длинное'),

	cargo_weight: z
		.string()
		.min(1, 'Укажите вес груза')
		.max(50, 'Значение слишком длинное'),

	whatkind_cargo: z
		.string()
		.min(2, 'Укажите тип груза')
		.max(50, 'Описание слишком длинное'),
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
