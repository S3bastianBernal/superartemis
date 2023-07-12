import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    descripcion:{
        type: String,
        require: true,
        trim: true,
    },
    imagen:{
        type: String,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);

const Categorias = mongoose.model("Categorias", categoriaSchema);

export default Categorias;