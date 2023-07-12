import Clientes from "../models/Clientes.js";

const obtenerClientes = async (req,res) =>{

    const clientes = await Clientes.find();

    res.json(clientes)
}

const agregarCliente = async (req,res) =>{
    const cliente = new Clientes(req.body);
    try {
        const nuevaCliente = await cliente.save();
        res.json(nuevaCliente);
    } catch (error) {
        console.log(error);
    }
}

const borrarCliente = async (req,res) =>{
    try {
        await Clientes.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

const selectOne = async (req, res)=>{
    try {
        const cliente = await Clientes.findOne({_id:req.params.id});
        res.send(cliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
}

const actualizarCliente = async (req,res) =>{
    try {
        const cliente = await Clientes.findOne({_id:req.params.id})

        if (req.body.Compañia) {
            cliente.Compañia = req.body.Compañia;
        }

        if (req.body.Contacto) {
            cliente.Contacto = req.body.Contacto;
        }

        if(req.body.Titulo){
            cliente.Titulo = req.body.Titulo;
        }

        if(req.body.Deireccion){
            cliente.Deireccion = req.body.Deireccion;
        }

        if(req.body.Ciudad){
            cliente.Ciudad = req.body.Ciudad;
        }

        if(req.body.CodigoPostal){
            cliente.CodigoPostal = req.body.CodigoPostal;
        }

        if(req.body.Pais){
            cliente.Pais = req.body.Pais;
        }

        if(req.body.Telefono){
            cliente.Telefono = req.body.Telefono;
        }

        if(req.body.Fax){
            cliente.Fax = req.body.Fax;
        }

        await cliente.save();
        res.send(cliente)
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

export {obtenerClientes,agregarCliente,borrarCliente,actualizarCliente,selectOne};