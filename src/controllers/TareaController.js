import Tarea from '../models/Tarea.js'

export const getAllTareas = async(req,res)=>{

    try {
        const all = await Tarea.find();
        res.status(200).json(all)
    } catch (error) {
        res.status(500).json(error)
    }


}

export const getOneTarea = async(req,res)=>{

    try {
        const tarea = await Tarea.findById(req.params.id);
        res.status(tarea?200:400).json(tarea?tarea:{})
    } catch (error) {
        res.status(500).json(error)
    }

}

export const createTarea = async(req,res)=>{

    const newTarea = new Tarea(req.body)
    try {
        const saved = await newTarea.save();
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateTarea = async(req,res)=>{

    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(tarea)
    } catch (error) {
        res.status(500).json(error)
    }

}

export const deleteTarea = async(req,res)=>{

    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({"mensaje":"Eliminado con exito"})
    } catch (error) {
        res.status(500).json(error)
    }


}


