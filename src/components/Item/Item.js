import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncMock';

const Item = ({ title, stock, price, text, img, alt }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
        const matchedProduct = data.find((product) => product.title === title);
        setProduct(matchedProduct);
        });
    }, [title]);

    return (
        <div className="container">
            <div className="section">
                <div className="columns">
                <div className="column is-4">
                    {product && (
                    <div className="card">
                        <figure className="image is-square">
                        <img src={img} alt={product.alt} />
                        </figure>
                        <div className="media-content">
                        <h2>Titulo: {product.title}</h2>
                        <h2>$ {product.price}</h2>
                        <h2>{text}</h2>
                        <Link to={`/products/${product.id}`}>Mas Info</Link>
                        </div>
                        <ItemCount
                        initial={1}
                        stock={stock}
                        onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                        />
                    </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
