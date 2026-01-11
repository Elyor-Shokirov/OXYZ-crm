import bcrypt from 'bcrypt'
import { Auth } from '../models/auth.model'

export const createUser = async (req, res) => {
	try {
		const { username, password } = req.body
		const hashPassword = await bcrypt.hash(password, 10)
		const user = await Auth.create({ username, password: hashPassword })
		res.status(201).json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
