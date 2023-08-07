
import CartIcon from "./media/shoppingCart.svg";

const CarWidget=()=>{
    return(
        <div>
            <span className="button  is-medium is-link">
                <img src={CartIcon} width="30" alt="Icono Carrito"/>
                <span className="button is-static is-rounded is-small">0</span>
            </span>
        </div>
    )
}

export default CarWidget;