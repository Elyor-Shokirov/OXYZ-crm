import { Router } from 'express'
const router = Router()
const { createUser, getUsers } = await import(
	'../controller/auth.controller.js'
)
router.post('/create', createUser)
router.get('/users', getUsers)
export default router
