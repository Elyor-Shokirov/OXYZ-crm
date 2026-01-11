import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Auth } from '../models/auth.model.js'

// Token generatsiya qilish funksiyasi
const generateToken = user => {
	return jwt.sign(
		{
			id: user.id,
			username: user.username,
		},
		process.env.JWT_SECRET,
		{ expiresIn: '1h' }
	)
}

export const createUser = async (req, res) => {
	try {
		const { username, password } = req.body

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: 'Username and Password are required' })
		}

		const existingUser = await Auth.findOne({ where: { username } })
		if (existingUser) {
			return res.status(400).json({
				error: 'Username already exists',
			})
		}

		const hashPassword = await bcrypt.hash(password, 10)
		const user = await Auth.create({ username, password: hashPassword })
		const token = generateToken(user)

		res.status(201).json({
			success: true,
			message: 'User created successfully',
			token,
			user: {
				id: user.id,
				username: user.username, // ❌ username.id emas!
				createdAt: user.createdAt,
			},
		})
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getAllUsers = async (req, res) => {
	try {
		const users = await Auth.findAll()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getUser = async (req, res) => {
	try {
		const user = await Auth.findByPk(req.params.id) // findOne emas, findByPk
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(404).json({ message: 'User not found' })
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
