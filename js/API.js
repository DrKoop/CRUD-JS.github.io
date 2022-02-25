const url = 'http://localhost:4000/clientes'

export const nuevoCliente = async cliente => {
    
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        //Una ves validado + datos enviados, redireccion
        window.location.href = 'index.html'
    }catch(error){
        console.log(error)
    }
}


/* -------------------------------------------------------------------------- */
/*                   Obtiene todos los datos de los clientes                  */
/* -------------------------------------------------------------------------- */

export const obtenerClientes = async () => {
    try{
        const resultado = await fetch(url)
        const clientes = await resultado.json()
        return clientes;

    }catch(error){
        console.log(error)
    }
}
/* -------------------------------------------------------------------------- */
/*                             Elimina un Cliente                             */
/* -------------------------------------------------------------------------- */

export const eliminarCliente = async clienteId => {
    try{
        //Consultando Endpoint + metodo
        await fetch(`${url}/${clienteId}`,{
            method : 'DELETE'
        })
    }catch(error){
        console.log(error)
    }
}

/* -------------------------------------------------------------------------- */
/*                                   EDITAR                                   */
/* -------------------------------------------------------------------------- */

export const ObtenerCliente = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        //console.log(cliente)
        return cliente;
    }catch(error){
        console.log(error)
    }
}


/* -------------------------------------------------------------------------- */
/*                                  ACTUALIZA                                 */
/* -------------------------------------------------------------------------- */

export  const editarCliente = async cliente => {
    //console.log(cliente)
    try{
       await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify( cliente ),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        window.location.href = 'index.html'
    }catch(error){
        console.log(error)
    }
}