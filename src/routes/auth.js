import express from "express";

import {login, register} from '../controllers/authController.js'

import { verifyToken, verifyUser } from '../utils/verifyToken.js';



const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/verifyToken",verifyToken)
router.get("/editar/:id",verifyUser,(req,res,next)=>[
    res.send({"message":"hola soy el editor"})
])

export default router;