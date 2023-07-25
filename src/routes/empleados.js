import express from 'express'
import { getAllEmpleados,createEmpleado,deleteEmpleado,getOneEmpleado,updateEmpleado} from '../controllers/EmpleadoController.js'
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router()


router.get('/',getAllEmpleados)
router.get('/:id',getOneEmpleado)
router.post('/',verifyUser,createEmpleado)
router.put('/:id',verifyUser,updateEmpleado)
router.delete('/:id',verifyUser,deleteEmpleado)


export default router
