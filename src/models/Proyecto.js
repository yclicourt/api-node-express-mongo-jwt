import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema({
  titulo: String, // String is shorthand for {type: String}
  descripcion: String,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true },
});

export default mongoose.model("Proyecto", proyectoSchema);
