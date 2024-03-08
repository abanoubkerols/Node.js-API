import { Router } from 'express'
import { getUsers } from './userControl.js'


export let router = Router()

router.get('/users' , getUsers)