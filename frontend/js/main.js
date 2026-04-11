// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)

document.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost:8080/api/clientes')

        .then(response => response.json())

        .then(data => {

            // console.log('Datos:', data);

            const elemento = document.getElementById("table-cliente")



            for (let i = 0; i < 10; i++) {
                //data[i],muestra en forma de array
                let cliente = data[i]
                //alt + 96
                let fila = `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellido}</td>
                    <td>${cliente.dni}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.direccion}</td>
                    <td>
                    <button class="btn btn-outline-primary  me-2">
                    <i class="fas fa-edit"></i> Editar
                    </button>
                     <button id="btnEliminar" data-idcliente = ${cliente.id} class="btn btn-outline-danger ">
                   <i class="fas fa-trash"></i> Eliminar
                   </button>
                   </td>

                </tr>
                `
                elemento.innerHTML += fila
                //console.log(cliente) //MUESTRO LOS RESULTADOS EN CONSOLA 



            }



        })

});

//EVENTO DE CLICK EN JAVASCRIPT
//CREAMOS UNA VARIABLE QUE ALMACENE EL DOM DE ESE ELEMENTO DEL BOTON 
document.addEventListener("click", function (e) {
    const btnDelete = e.target.closest("#btnEliminar");
    if (btnDelete) { //TRUE o 1 

        alert("Eliminando...");
        const id = btnDelete.dataset.idcliente;
        fetch(`http://localhost:8080/api/clientes/${id}`, {
            method: `DELETE`

        })
            .then(response => {
                if (respoonse.ok) {
            alert(`Cliente eliminado correctamente`);
            this.location.reload(); //recargar la pagina para reflejar los cambios 
        } else {
            alert(`Error al eliminar el cliente`);
        }
    })
            }
        });








