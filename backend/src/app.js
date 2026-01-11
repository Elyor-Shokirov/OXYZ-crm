import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { sequelize } from './config/database.js'

const PORT = process.env.PORT || 3000
const app = express()

// ✅ MIDDLEWARE - routes dan OLDIN bo'lishi kerak!
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
import authRouters from './routes/auth.routes.js'

app.use('/auth', authRouters) // ← middleware dan KEYIN

app.get('/', (req, res) => {
	res.send('Hello World')
})
;(async () => {
	try {
		console.log('🔌 Connecting to database...')
		await sequelize.authenticate()
		console.log('✅ Database connected')
		await sequelize.sync()
		console.log('✅ Models synced')
		app.listen(PORT, '0.0.0.0', () => {
			console.log(`🚀 Server running on http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error('❌ DB error:', error.message)
		process.exit(1)
	}
})()
