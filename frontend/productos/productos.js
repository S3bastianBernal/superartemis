import { allProductos, addProducto, deleteProducto, selectOne, updateProducto } from "./API.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loadProductos();
});


//Read
async function loadProductos() {
    const productos = await allProductos();
    const contenedor = document.querySelector("main");
    productos.forEach((producto) => {
        const {ProductoNombre,CategoriaID,CantidadPorUnidad,_id} = producto
        contenedor.innerHTML+=`
        <div class="card">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
        <div class="card__content">
            <p class="card__title">${ProductoNombre}
            </p><p class="card__description">${CategoriaID} <br> ${CantidadPorUnidad}</p>
            <div class="botones_orden">
            <button class="edit-button update" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
            <i class="bi bi-pencil"></i>
            </button>
            <button class="delete-button eliminar" id="${_id}">
            <i class="bi bi-trash"></i>
            </button>
            </div>
        </div>
        `
    });
};


//Insert
const formulario = document.querySelector("#formProducto");
formulario.addEventListener("submit", insertProducto);

function insertProducto(e) {
  e.preventDefault();
  const ProductoNombre = document.querySelector("#nombre").value;
  const CategoriaID = document.querySelector("#categoriaID").value;
  const CantidadPorUnidad = document.querySelector("#cantidadPorUnidad").value;

  const registro = {
    ProductoNombre,
    CategoriaID,
    CantidadPorUnidad
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  alert("Datos guardados correctamente.");
  return addProducto(registro);
};

function validation(Objeto) {
  return !Object.values(Objeto).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector("main");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idProducto = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este Producto?");
        if (confir) {
            deleteProducto(idProducto);
        }
    }
}


//Read One
const infoCategoria = document.querySelector("main");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("update")) {
        const id = e.target.getAttribute("id");
        const informacion = await selectOne(id);

        const {_id,ProductoNombre,CategoriaID,CantidadPorUnidad} = informacion;

        const nombre = document.querySelector('#nombreEdit');
        const categoriaID = document.querySelector('#categoriaIDEdit');
        const cantidadPorUnidad = document.querySelector('#cantidadPorUnidadEdit');
        const idEdit = document.querySelector('#idEdit');

        nombre.value = ProductoNombre;
        categoriaID.value = CategoriaID;
        cantidadPorUnidad.value = CantidadPorUnidad;
        idEdit.value = _id;
    }
};


//Update
const formEdit = document.querySelector("#formEditProducto");
formEdit.addEventListener('submit',actualizar)

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const ProductoNombre = document.querySelector('#nombreEdit').value;
    const CategoriaID = document.querySelector('#categoriaIDEdit').value;
    const CantidadPorUnidad = document.querySelector('#cantidadPorUnidadEdit').value;

    const datos ={
        ProductoNombre,
        CategoriaID,
        CantidadPorUnidad
    }

    console.log(datos,id);

    return updateProducto(datos,id);
};