import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    ProductoNombre: {
        type: String,
        require: true,
        trim: true
    },
    CategoriaID:{
        type: String,
        require: true,
        trim: true
    },
    CantidadPorUnidad:{
        type: String,
        require: true,
        trim: true
    },
},
{
    timestamps: true
}
);

const Producto = mongoose.model("Productos", productoSchema);

export default Producto;