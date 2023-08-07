import React, { useState, useEffect } from 'react'; //Importar módulos de estados y uso de estados de rect
import { Link } from 'react-router-dom';  //Importar componente de react para linkear y navegar
import { getProducts } from '../../asyncMock'; //Importar la función que es una promesa, del arreglo
import ItemCount from '../ItemCount/ItemCount'; //Importar componente ItemCount

const Item = ({ title, stock, price, text, img, alt }) => { //Componente Item que acpeta esas propiedades
    const [product, setProduct] = useState(null); //Declarar como nulo, inicialmente, al estado local product usando el hook useState

    useEffect(() => { //Usar useEffect para cargar detalles de producto
        getProducts().then((data) => { //Llamar a getProuct 
            const matchedProduct = data.find((product) => product.title === title); //Buscar producto que coincida con el titulo
            setProduct(matchedProduct); //Actualizar el estado product con el producto encontrado
        });
    }, [title]); // Se actualiza con el [title]

    return ( //Regresar elementos para una carta de un producto
        <div className="container">
            <div className="section">
                <div className="columns">
                <div className="column is-4">
                    {product && (
                    <div className="card">
                        <figure className="image is-square">
                            <img src={img} alt={product.alt} />
                        </figure>
                        <div class="card-content">
                            <div class="content">
                            <h2 className="title is-4" >Titulo: {product.title}</h2>
                            <h2 className="subtitle is-4">$ {product.price}</h2>
                            <h2 className="subtitle is-5">{text}</h2>
                            <Link to={`/products/${product.id}`} className="subtitle is-6">Más Info</Link>
                            <div class="box">
                                <ItemCount
                                initial={1}
                                stock={stock}
                                onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Item; //Exportar componente
