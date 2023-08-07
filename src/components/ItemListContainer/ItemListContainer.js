/*
PreEntrega1Rodriguez
*/
import { useState, useEffect } from "react";
import {getProducts} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])

    return(
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

export default ItemListContainer;   