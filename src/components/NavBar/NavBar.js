/*
    Armando Rodriguez
    PreEntrega2
*/

import { Link } from "react-router-dom" //Importar componente de react para linkear y navegar
import CarWidget from "../CarWidget/CarWidget"; //Importar componente de carrito de compras
import logo from "./media/logo.svg"; //Importar logo vector


function NavBar(){
    return( //Regresar elementos para una barra de navegación
        <div>
            <nav class="navbar is-info" role="navigation" aria-label="main navigation">
            <a class="navbar-item">
                <Link to="/"><img src={logo} width="112" height="28" alt="Logo"/></Link>
            </a>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/products" class="navbar-item">PC</Link>
                    <Link to="/HoldOn" class="navbar-item">Phones</Link>
                    <Link to="/HoldOn" class="navbar-item">Tablets</Link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="shoppingCart">
                            <CarWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )

}

export default NavBar; //Exportar componente

/*
    Fin de código
*/
