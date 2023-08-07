/*
    Armando Rodriguez
    PreEntrega2
*/

import { useState } from "react"; //Importar estados de react

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial) //Uso de hooks para actualizar cantidad

    const increment = () => { //Función para incrementar contador topado a stock
        if (quantity<stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => { //Función para decrementar contador, mínimo 1
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return( //Regresar contador con función clickeble para los botones
        <div className="Counter">
            <div className="Controls">
                <button className="button is-danger" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="button is-primary" onClick={increment}>+</button>
                <div>
                    <button className="button is-link" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar a Carrito</button>
                </div>
            </div>
        </div> //Se desactiva el botón incrementar solo si alcanza stock
    )
}

export default ItemCount; //Exportar componente

/*
    Fin de código
*/