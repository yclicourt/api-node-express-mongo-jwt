import express from 'express'
import { getAllTareas,createTarea,deleteTarea,getOneTarea,updateTarea } from '../controllers/TareaController.js'
import { verifyUser } from '../utils/verifyToken.js';


const router = express.Router()


router.get('/',getAllTareas)
router.get('/:id',getOneTarea)
router.post('/',verifyUser,createTarea)
router.put('/:id',verifyUser,updateTarea)
router.delete('/:id',verifyUser,deleteTarea)




export default router;