import { Router } from 'express'
const router = Router()
const { createUser, getAllUsers, getUser } = await import(
	'../controller/auth.controller.js'
)
router.post('/create', createUser)
router.get('/users', getAllUsers)
router.get('/users/:id', verifyToken, getUser)
export default router
