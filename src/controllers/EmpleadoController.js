import Empleado from '../models/Empleado.js'



export const getAllEmpleados = async(req,res)=>{

    try {
        const all = await Empleado.find();
        res.status(200).json(all)
    } catch (error) {
        res.status(500).json(error)
    }


}

export const getOneEmpleado = async(req,res)=>{

    try {
        const empleado = await Empleado.findById(req.params.id);
        res.status(empleado?200:400).json(empleado?empleado:{})
    } catch (error) {
        res.status(500).json(error)
    }

}

export const createEmpleado = async(req,res)=>{

    const newEmpleado = new Empleado(req.body)
    try {
        const saved = await newEmpleado.save();
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateEmpleado = async(req,res)=>{

    try {
        const empleado = await Empleado.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(empleado)
    } catch (error) {
        res.status(500).json(error)
    }

}

export const deleteEmpleado = async(req,res)=>{

    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.status(200).json({"mensaje":"Eliminado con exito"})
    } catch (error) {
        res.status(500).json(error)
    }


}

