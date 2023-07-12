import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    Compañia:{
        type: String,
        require: true,
        trim: true,
    },
    Contacto:{
        type: String,
        require: true,
        trim: true,
    },
    Telefono:{
        type: String,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);

const Clientes = mongoose.model("Clientes", clienteSchema);

export default Clientes;