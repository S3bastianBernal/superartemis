const urlAll = "http://localhost:5000/clientes/all";
const urlAdd = "http://localhost:5000/clientes/add";
const urlDelete = "http://localhost:5000/clientes/del";
const urlOne = "http://localhost:5000/clientes/one";
const urlUpdate = "http://localhost:5000/clientes/upd";

//Read
export const allClientes = async () =>{
    try {
        const clientes = await fetch(urlAll);
        const infoCliente = clientes.json();
        return infoCliente;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addCliente = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteCliente = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateCliente(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};