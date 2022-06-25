import express from 'express'
import * as controller from '../controllers/auth.controller.js'

const route = express.Router()
route.post('/api/register', controller.create)
route.post('/api/login', controller.login)
export default route
