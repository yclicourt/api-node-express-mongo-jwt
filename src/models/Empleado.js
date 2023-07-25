import mongoose, { Schema } from "mongoose";

const empleadoSchema = new Schema({
  nombre: String, 
  apellidoPaterno: String,
  apellidoMaterno: String,
  edad:Number,
  direccion:String,
  rol: String,
  tarea_id:{
    type: Schema.Types.ObjectId,
    ref:'Tarea'
  }
    
});

export default mongoose.model("Empleado", empleadoSchema);
