import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import auth from '../auth/login'

const route = Router()

route.post('/signup',indexCtrl.userCtrl.createUser)
route.post('/signin',auth.userLogin)

export default route