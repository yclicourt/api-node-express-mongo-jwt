import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  titulo: String, // String is shorthand for {type: String}
  descripcion: String,
  fecha_creacion: { type: Date, default: Date.now },
  activa: { type: Boolean, default: true },
  
  });

export default mongoose.model("Tarea", tareaSchema);
