/*
    Armando Rodriguez
    PreEntrega2
*/

import { Link } from "react-router-dom" //Importar componente de react para linkear y navegar
import React, { useState, useEffect } from 'react'; //Importar estados y uso de estados de rect
import { useParams } from 'react-router-dom'; //Importar parametros de usuario de react
import { getProducts } from '../../asyncMock'; //Importar la función que es una promesa, del arreglo


function Product() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
        const foundProduct = data.find((product) => product.id === Number(productId));
        setProduct(foundProduct);
        });
    }, [productId]);

    if (!product) {
        return(
            <div>
                <div class="section is-large">
                    <h2 class="title is-2">Cargando...</h2>
                    <button class="button is-rounded"><Link to="/products">Volver</Link></button>
                </div>;
            </div>
        )
    }

    const { id, title, stock, price, img, alt, text, detail } = product;

    return (
        <div class="box">
            <div class="block">
            <img src={img} alt={alt}/>
            <h2 class="title is-1">{title}</h2>
            <h2 class="subtitle is-7">SKU: {id}</h2>
            <h2 class="subtitle is-2">{text}</h2>
            <h2 class="subtitle is-6">{detail}</h2>
            <h2 class="subtitle is-5">¡Contamos con {stock} unidades!</h2>
            <h2 class="subtitle is-1">Desde: $ {price}</h2>
            <button class="button is-rounded"><Link to="/products">Volver</Link></button> 
            </div> 
        </div>
    );
}

export default Product; //Exportar componente

/*
    Fin de código
*/