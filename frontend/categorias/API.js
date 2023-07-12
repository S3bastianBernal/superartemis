const urlAll = "http://localhost:5000/categorias/all";
const urlAdd = "http://localhost:5000/categorias/add";
const urlDelete = "http://localhost:5000/categorias/del";
const urlOne = "http://localhost:5000/categorias/one";
const urlUpdate = "http://localhost:5000/categorias/upd";

//Read
export const allCategorias = async () =>{
    try {
        const categorias = await fetch(urlAll);
        const infoCategoria = categorias.json();
        return infoCategoria;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addCategoria = async (registro) => {
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
export const deleteCategoria = async (id) =>{
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
export async function updateCategoria(data,id){
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