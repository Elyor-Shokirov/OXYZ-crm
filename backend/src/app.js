import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { sequelize } from './config/database.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

//Routes
import authRouters from './routes/auth.routes'

app.use('/auth', authRouters)

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
		app.listen(PORT, () => {
			console.log(`🚀 Server running on http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error('❌ DB error:', error.message)
	}
})()
