import { ObtenerCliente, editarCliente } from './API.js';
import {mostrarAlerta, validar} from './funciones.js'

(function(){

    //Inyectando los campos del formulario PT-1
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () =>{
        const parametrosURL =  new URLSearchParams(window.location.search)
        const idCliente = parseInt( parametrosURL.get('id') )
        const cliente = await ObtenerCliente( idCliente )
        //console.log(cliente)
        mostrarCliente(cliente);

        //Actualizar Cambios PT-1
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente){
        //console.log(cliente)
        //EXTRAE informacion del objeto, devuelto por el fetch
        const {nombre, empresa, email, telefono, id} = cliente;
        //Inyectando los campos del formulario PT-2
        nombreInput.value = nombre
        empresaInput.value = empresa
        emailInput.value = email
        telefonoInput.value = telefono
        idInput.value = id
    }

    //Actualizar Cambios PT-2
    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        //console.log(cliente)

        if( validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios')
            return;
        }
        //Reescribe un Objeto nuevo
        editarCliente(cliente)
    }
})();