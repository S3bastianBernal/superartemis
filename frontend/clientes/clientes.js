import {
    allClientes,
    addCliente,
    deleteCliente,
    selectOne,
    updateCliente,
  } from "./API.js";
  
  document.addEventListener("DOMContentLoaded", () => {
    loadClientes();
  });
  
  //Read
  async function loadClientes() {
    const clientes = await allClientes();
    const contenedor = document.querySelector("main");
    clientes.forEach((cliente) => {
        const {Compania,Contacto,Titulo,Direccion,Ciudad,_id} = cliente
      contenedor.innerHTML += `
      <div class="card">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
      <div class="card__content">
          <p class="card__title">${Compania}
          </p><p class="card__description">${Contacto}<br>${Titulo}<br>${Direccion}<br>${Ciudad}</p>
          <div class="botones_orden">
          <button class="edit-button update" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
          <i class="bi bi-pencil"></i>
          </button>
          <button class="delete-button eliminar" id="${_id}">
          <i class="bi bi-trash"></i>
          </button>
          </div>
      </div>
          `;
    });
  }
  
  //Insert
  const formulario = document.querySelector("#formCliente");
  formulario.addEventListener("submit", insertCliente);
  
  function insertCliente(e) {
    e.preventDefault();
    const Compania = document.querySelector("#compania").value;
    const Contacto = document.querySelector("#contacto").value;
    const Titulo = document.querySelector("#titulo").value;
    const Direccion = document.querySelector("#direccion").value;
    const Ciudad = document.querySelector("#ciudad").value;
  
    const registro = {
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad
    };
  
    if (validation(registro)) {
      alert("Todos los datos son obligatorios");
    }
    alert("Datos guardados correctamente.");
    return addCliente(registro);
  }
  
  function validation(Objeto) {
    return !Object.values(Objeto).every((element) => element !== "");
  }
  
  //Delete
  const eliminar = document.querySelector("main");
  eliminar.addEventListener("click", borrar);
  
  function borrar(e) {
    if (e.target.classList.contains("eliminar")) {
      console.log(e.target);
      const idCliente = e.target.getAttribute("id");
      const confir = confirm("Desea eliminar este Cliente?");
      if (confir) {
        deleteCliente(idCliente);
      }
    }
  }
  
  //Read One
  const infoEmpleado = document.querySelector("main");
  infoEmpleado.addEventListener("click", getInfo);
  
  async function getInfo(e) {
    if (e.target.classList.contains("update")) {
      const id = e.target.getAttribute("id");
      const informacion = await selectOne(id);
  
      const { _id, Compania, Contacto, Titulo, Direccion, Ciudad } = informacion;
  
      const compania = document.querySelector("#companiaEdit");
      const contacto = document.querySelector("#contactoEdit");
      const titulo = document.querySelector("#tituloEdit");
      const direccion = document.querySelector("#direccionEdit");
      const ciudad = document.querySelector("#ciudadEdit");
      const idEdit = document.querySelector("#idEdit");
  
      compania.value = Compania;
      contacto.value = Contacto;
      titulo.value = Titulo;
      direccion.value = Direccion;
      ciudad.value = Ciudad;
      idEdit.value = _id;
    }
  }
  
  //Update
  const formEdit = document.querySelector("#formEditCliente");
  formEdit.addEventListener("submit", actualizar);
  
  function actualizar(e) {
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    const Compania = document.querySelector("#companiaEdit").value;
    const Contacto = document.querySelector("#contactoEdit").value;
    const Titulo = document.querySelector("#tituloEdit").value;
    const Direccion = document.querySelector("#direccionEdit").value;
    const Ciudad = document.querySelector("#ciudadEdit").value;
  
    const datos = {
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad
    };
  
    console.log(datos, id);
  
    return updateCliente(datos, id);
  };