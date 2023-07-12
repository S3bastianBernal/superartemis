const urlAll = "http://localhost:5000/productos/all";
const urlAdd = "http://localhost:5000/productos/add";
const urlDelete = "http://localhost:5000/productos/del";
const urlOne = "http://localhost:5000/productos/one";
const urlUpdate = "http://localhost:5000/productos/upd";

//Read
export const allProductos = async () =>{
    try {
        const productos = await fetch(urlAll);
        const infoProducto = productos.json();
        return infoProducto;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addProducto = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "producto.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteProducto = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "producto.html"
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
export async function updateProducto(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "producto.html"
    } catch (error) {
        console.log(error);
    }
};