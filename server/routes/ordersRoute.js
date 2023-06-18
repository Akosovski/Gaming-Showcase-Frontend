import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import login from "../auth/login";
import middleware from '../middleware/upload'

const route = Router()

route.post('/create',indexCtrl.ordersCtrl.create)

export default route