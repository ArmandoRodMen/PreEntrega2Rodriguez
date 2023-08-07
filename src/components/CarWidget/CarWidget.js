/*
    Armando Rodriguez
    PreEntrega2
*/

import CartIcon from "./media/shoppingCart.svg"; //Importar carrito icono vector

const CarWidget=()=>{
    return( //Regresar elementos del icono de carrito con un hardcodding de númeor de elementos en él
        <div>
            <span className="button  is-medium is-link">
                <img src={CartIcon} width="30" alt="Icono Carrito"/>
                <span className="button is-static is-rounded is-small">0</span>
            </span>
        </div>
    )
}

export default CarWidget; //Exportar componente

/*
    Fin de código
*/