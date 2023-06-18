import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import login from "../auth/login";
import middleware from '../middleware/upload'

const route = Router()

route.get('/',indexCtrl.productCtrl.findAll)
route.get('/:ids', indexCtrl.productCtrl.findOne)
route.get('/query/:id',indexCtrl.productCtrl.querySQL)
route.post('/',indexCtrl.productCtrl.create)
route.put('/:id',indexCtrl.productCtrl.update)
route.post('/upload/',middleware.upload, indexCtrl.productCtrl.createImage)

export default route