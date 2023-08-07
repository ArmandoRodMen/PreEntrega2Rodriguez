import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../asyncMock';


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
        return <div>Loading...</div>;
    }

    const { id, title, stock, price, img, alt, text, detail } = product;

    return (
        <div>
        <img src={img} alt={alt} />
        <h2>{title}</h2>
        <h2>{id}</h2>
        <h2>{text}</h2>
        <h2>{detail}</h2>
        <h2>{stock}</h2>
        <h2>{price}</h2>
        </div>
    );
}

export default Product;