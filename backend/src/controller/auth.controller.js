import bcrypt from 'bcrypt'
import { Auth } from '../models/auth.model.js'

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

export const getUsers = async (req, res) => {
	try {
		const users = await Auth.findAll()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
