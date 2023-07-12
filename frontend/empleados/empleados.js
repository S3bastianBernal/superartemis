import {
    allEmpleados,
    addEmpleado,
    deleteEmpleado,
    selectOne,
    updateEmpleado,
  } from "./API.js";
  
  document.addEventListener("DOMContentLoaded", () => {
    loadEmpleados();
  });
  
  //Read
  async function loadEmpleados() {
    const empleados = await allEmpleados();
    const contenedor = document.querySelector("main");
    empleados.forEach((empleado) => {
        const {Nombre,Apellido,Titulo,TituloCortesia,FechaContratacion,FechaNacimiento,Ciudad,Regiones,Pais,CodigoPostal,_id,Telefono,Extension} = empleado
      contenedor.innerHTML += `
      <div class="card">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
      <div class="card__content">
          <p class="card__title">${Nombre} ${Apellido}
          </p><p class="card__description">${FechaNacimiento} ${FechaContratacion}<br>${Titulo} ${TituloCortesia}<br>${Pais} ${Ciudad}<br>${Regiones} ${CodigoPostal}
          <br>${Telefono} ${Extension}</p>
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
  const formulario = document.querySelector("#formEmpleado");
  formulario.addEventListener("submit", insertEmpleado);
  
  function insertEmpleado(e) {
    e.preventDefault();
    const Apellido = document.querySelector("#apellido").value;
    const Nombre = document.querySelector("#nombre").value;
    const Titulo = document.querySelector("#titulo").value;
    const TituloCortesia = document.querySelector("#tituloCortesia").value;
  
    const registro = {
      Apellido,
      Nombre,
      Titulo,
      TituloCortesia
    };
  
    if (validation(registro)) {
      alert("Todos los datos son obligatorios");
    }
    alert("Datos guardados correctamente.");
    return addEmpleado(registro);
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
      const idEmpleado = e.target.getAttribute("id");
      const confir = confirm("Desea eliminar este Empleado?");
      if (confir) {
        deleteEmpleado(idEmpleado);
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
  
      const { _id, Apellido, Nombre, Titulo, TituloCortesia } = informacion;
  
      const nombre = document.querySelector("#nombreEdit");
      const apellido = document.querySelector("#apellidoEdit");
      const titulo = document.querySelector("#tituloEdit");
      const tituloCortesia = document.querySelector("#tituloCortesiaEdit");
      const idEdit = document.querySelector("#idEdit");
  
      nombre.value = Nombre;
      apellido.value = Apellido;
      titulo.value = Titulo;
      tituloCortesia.value = TituloCortesia;
      idEdit.value = _id;
    }
  }
  
  //Update
  const formEdit = document.querySelector("#formEditEmpleado");
  formEdit.addEventListener("submit", actualizar);
  
  function actualizar(e) {
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    const Apellido = document.querySelector("#apellidoEdit").value;
    const Nombre = document.querySelector("#nombreEdit").value;
    const Titulo = document.querySelector("#tituloEdit").value;
    const TituloCortesia = document.querySelector("#tituloCortesiaEdit").value;
  
    const datos = {
      Apellido,
      Nombre,
      Titulo,
      TituloCortesia
    };
  
    console.log(datos, id);
  
    return updateEmpleado(datos, id);
  };