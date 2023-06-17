import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import login from "../auth/login";
import middleware from '../middleware/upload'

const route = Router()

route.get('/',indexCtrl.customerCtrl.findAll)
route.get('/:ids', indexCtrl.customerCtrl.findOne)
route.get('/query/:id',indexCtrl.customerCtrl.querySQL)

export default route