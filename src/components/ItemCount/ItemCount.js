import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity<stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="button is-danger" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="button is-primary" onClick={increment}>+</button>
                <div>
                    <button className="button is-link" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar a Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;