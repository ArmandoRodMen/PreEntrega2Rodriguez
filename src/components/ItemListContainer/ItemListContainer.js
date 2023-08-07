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
            <section className="section is-medium">
                <h1 className="title is-1">Cyberprecios</h1>
                <h2 className="subtitle is-3">
                    {greeting} a los mejores precios de la web!
                </h2>
                <ItemList products={products}/>
            </section>
        </div>
    )
}

export default ItemListContainer;   