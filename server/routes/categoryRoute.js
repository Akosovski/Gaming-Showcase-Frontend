import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import login from "../auth/login";
import middleware from '../middleware/upload'

const route = Router()

route.get('/',indexCtrl.categoryCtrl.findAll)
route.get('/:ids', indexCtrl.categoryCtrl.findOne)
route.get('/query/:id',indexCtrl.categoryCtrl.querySQL)

export default route