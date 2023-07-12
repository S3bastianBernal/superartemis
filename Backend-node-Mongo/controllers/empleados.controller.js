import Empleado from "../models/Empleados.js";

const obtenerEmpleados = async (req, res)=>{
    const empleados = await Empleado.find();
    res.json(empleados);
};

const agregarEmpleado = async (req, res)=>{
    const empleado = new Empleado(req.body);
    try {
        const nuevoEmpleado = await empleado.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error);
    }
};

const borrarEmpleado = async (req, res)=>{
    try {
        await Empleado.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no existe"});
    }
};

const selectOne = async (req, res)=>{
    try {
        const empleado = await Empleado.findOne({_id:req.params.id});
        res.send(empleado);
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no existe"});
    }
}

const actualizarEmpleado = async (req, res)=>{
    try {
        const empleado = await Empleado.findOne({_id:req.params.id});
        if (req.body.Apellido) {
            empleado.Apellido = req.body.Apellido;
        }
        if (req.body.Nombre) {
            empleado.Nombre = req.body.Nombre;
        }
        if (req.body.Titulo) {
            empleado.Titulo = req.body.Titulo;
        }
        if (req.body.TituloCortesia) {
            empleado.TituloCortesia = req.body.TituloCortesia;
        }
        await empleado.save();
        res.send(empleado);
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no existe"});
    }
};

export {obtenerEmpleados, agregarEmpleado, borrarEmpleado, selectOne, actualizarEmpleado};