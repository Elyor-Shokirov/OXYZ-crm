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
