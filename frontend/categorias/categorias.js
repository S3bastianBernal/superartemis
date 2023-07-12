import { allCategorias, addCategoria, deleteCategoria, selectOne, updateCategoria } from "./API.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loadCategorias();
});


//Read
async function loadCategorias() {
    const categorias = await allCategorias();
    const contenedor = document.querySelector("main");
    categorias.forEach((categoria) => {
        const {nombre,descripcion,imagen,_id} = categoria
        contenedor.innerHTML+=`
        
        <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div class="card__content">
                <p class="card__title">${nombre}
                </p><p class="card__description">${descripcion}<br>${imagen}</p>
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
const formulario = document.querySelector("#formCategoria");
formulario.addEventListener("submit", insertCategoria);

function insertCategoria(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const descripcion = document.querySelector("#descripcion").value;
  const imagen = document.querySelector("#imagen").value;

  const registro = {
    nombre,
    descripcion,
    imagen
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  alert("Datos guardados correctamente.");
  return addCategoria(registro);
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
        const idCategorias = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta categoria?");
        if (confir) {
            deleteCategoria(idCategorias);
        }
    }
}


//Read One
const infoCategoria = document.querySelector("main");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("update")) {
        console.log(e.target);
        const id = e.target.getAttribute("id");
        const informacion = await selectOne(id);

        const {_id,nombre,descripcion,imagen} = informacion;

        const nombreCate = document.querySelector('#nombreEdit');
        const descripcionCate = document.querySelector('#descripcionEdit');
        const imagenCate = document.querySelector('#imagenEdit');
        const idEdit = document.querySelector('#idEdit');

        nombreCate.value = nombre;
        descripcionCate.value = descripcion;
        imagenCate.value = imagen;
        idEdit.value = _id;
    }
};


//Update
const formEdit = document.querySelector("#formEditCategoria");
formEdit.addEventListener('submit',actualizar)

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const nombre = document.querySelector('#nombreEdit').value;
    const descripcion = document.querySelector('#descripcionEdit').value;
    const imagen = document.querySelector('#imagenEdit').value;

    const datos ={
        nombre,
        descripcion,
        imagen
    }

    console.log(datos,id);

    return updateCategoria(datos,id);
};