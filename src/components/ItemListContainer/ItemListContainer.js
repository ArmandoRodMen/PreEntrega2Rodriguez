/*
    Armando Rodriguez
    PreEntrega2
*/

import { useState, useEffect } from "react"; //Importar estados y uso de estados de rect
import {getProducts} from "../../asyncMock"; //Importar la función que es una promesa, del arreglo
import ItemList from "../ItemList/ItemList"; //Importar componente lista de items

const ItemListContainer = ({greeting}) => { //La función constante recibe una propiedad saludo 

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts() //Consumo asincrónico
            .then(response =>{
                setProducts(response) //Caso exista respuesta
            })
            .catch(error =>{
                console.log(error) //Caso sea error
            })
    }, [])

    return( //Regresar una sección con un saludo , propiedad, importado y un acomodo de los productos por componente ItemList 
        <div>
            <section class="hero">
                <div class="hero-body">
                    <h1 class="title is-3">Cyberprecios</h1>
                    <h2 class="subtitle is-3">
                        {greeting} a los mejores precios de la web!
                    </h2>
                    <ItemList products={products}/>
                </div>
            </section>
        </div>
    )
}

export default ItemListContainer; //Exportar componente  

/*
    Fin de código
*/