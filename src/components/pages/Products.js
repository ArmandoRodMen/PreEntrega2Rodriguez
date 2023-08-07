/*
    Armando Rodriguez
    PreEntrega2
*/

import ItemListContainer from "../ItemListContainer/ItemListContainer"; //Importar lista de items contenidos
import { getProducts } from '../../asyncMock'; //Importar la función que es una promesa, del arreglo


function Products(){

    getProducts() //Consumir promesa
    .then(products => { //Después
        console.log("Productos obtenidos:", products); //Imprimir en consola productos encontrados
    })
    .catch(error => { //Caso contrario
        console.error("Error al obtener productos:", error.message); //Imprimir error
    });

    return(
        <ItemListContainer greeting={'Bienvenidos'}/> //Regresar componente con una propiedad 
    )
}


export default Products; //Exportar componente

/*
    Fin de código
*/