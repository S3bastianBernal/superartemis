import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
    Apellido: {
        type: String,
        require: true,
        trim: true
    },
    Nombre:{
        type: String,
        require: true,
        trim: true
    },
    Titulo:{
        type: String,
        require: true,
        trim: true
    },
    TituloCortesia:{
        type: String,
        require: true,
        trim: true
    },
},
{
    timestamps: true
}
);

const Empleado = mongoose.model("Empleados", empleadoSchema);

export default Empleado;