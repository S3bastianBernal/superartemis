import Producto from "../models/Productos.js";

const obtenerProductos = async (req, res)=>{
    const productos = await Producto.find();
    res.json(productos);
};

const agregarProducto = async (req, res)=>{
    const producto = new Producto(req.body);
    try {
        const nuevoProducto = await producto.save();
        res.json(nuevoProducto);
    } catch (error) {
        console.log(error);
    }
};

const borrarProducto = async (req, res)=>{
    try {
        await Producto.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
};

const selectOne = async (req, res)=>{
    try {
        const producto = await Producto.findOne({_id:req.params.id});
        res.send(producto);
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
}

const actualizarProducto = async (req, res)=>{
    try {
        const producto = await Producto.findOne({_id:req.params.id});
        if (req.body.ProductoNombre) {
            producto.ProductoNombre = req.body.ProductoNombre;
        }
        if (req.body.CategoriaID) {
            producto.CategoriaID = req.body.CategoriaID;
        }
        if (req.body.CantidadPorUnidad) {
            producto.CantidadPorUnidad = req.body.CantidadPorUnidad;
        }
        await producto.save();
        res.send(producto);
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
};

export {obtenerProductos, agregarProducto, borrarProducto, selectOne, actualizarProducto};